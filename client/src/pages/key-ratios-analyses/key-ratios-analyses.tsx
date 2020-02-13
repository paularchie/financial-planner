import React, { useEffect, useState } from 'react';
import './key-ratios-analyses.scss';
import FileInput from '../../components/file-input/file-input';
import useApiClient from '../../hooks/api-client.hook';
import C3Chart from "react-c3js";
import Select from '../../components/Form/Select/Select';
import * as _ from 'lodash';
import * as R from 'ramda';

// TODO: select element interface

export type Company = {
    id: string
    companyName: string
    tickerSymbol: string
}

const chartProps = {
    data: {
        rows: [
            ['data1', 'data2', 'data3'],
            [90, 120, 300],
            [40, 160, 240],
            [50, 200, 290],
            [120, 160, 230],
            [80, 130, 300],
            [90, 220, 320]
        ],
    },
}

const KeyRatiosAnalyses = () => {

    const apiClient = useApiClient();
    const [companyDropdownItems, setCompanyDropdownItems] = useState([]);
    const [keyRatioDropdownItems, setKeyRatioDropdownItems] = useState([]);
    const [selCompanyId, setSelCompanyId] = useState('');
    const [selKeyRatios, setSelKeyRatios] = useState('');
    const [keyRatiosCached, setKeyRatiosCached] = useState('');

    useEffect(() => {
        getCompanies();
    }, [])

    useEffect(() => {
        // console.log(keyRatiosCached)
    }, [keyRatiosCached])

    const getCompanies = async () => {
        const companies = await apiClient.getCompanies();
        const companyDropdownItems = companies.map((company: Company) => {
            return {
                value: company.id,
                displayText: `${company.companyName} (${company.tickerSymbol})`
            }
        });
        setCompanyDropdownItems(companyDropdownItems);
    }

    const handleFileInputChange = (fileList: FileList) => {
        const res = apiClient.uploaKeyRatios(fileList);
        console.log(res);
        // updateCache(clients)
        // const message = `Successfully uploaded ${clients.length} ${clients.length == 1 ? 'client' : 'clients'}`;
        // showNotification(message);
    }

    const handleCompanyChange = async (companyId: string) => {
        const keyRatios = await apiClient.getKeyRatiosPerCompany(companyId);
        const keyRatioDropdownItems = Object.keys(keyRatios).map(key => {
            return {
                value: key,
                displayText: keyRatios[key].description
                
            }
        });

        setKeyRatioDropdownItems(keyRatioDropdownItems);
        setSelCompanyId(companyId);
    }

    const handleKeyRatiosOnClose = async () => {
        console.log(Object.keys(keyRatiosCached), selKeyRatios)
    console.log(R.difference(selKeyRatios, Object.keys(keyRatiosCached)));
       const keyRatios = await apiClient.getKeyRatiosValues(selCompanyId, selKeyRatios);
       console.log(keyRatios)
       setKeyRatiosCached(keyRatios);
    }

    return (
        <div>

            <FileInput
                handleFileInputChange={handleFileInputChange}
                displayText="Upload CSV"
                allowedExtensions=".csv"
                multiple={false}
            />

            <div style={{ maxWidth: '250px' }}>
                <Select
                    items={companyDropdownItems}
                    inputLabel="Company"
                    name="company-input"
                    id="company-input"
                    changeHandler={handleCompanyChange}
                    required
                />

                {!!selCompanyId &&
                    <Select
                        items={keyRatioDropdownItems}
                        inputLabel="Key Ratios"
                        name="key-ratios-input"
                        id="key-ratios-input"
                        changeHandler={(selectedItems => setSelKeyRatios(selectedItems))}
                        onCloseHandler={handleKeyRatiosOnClose}
                        multiple
                        required
                    />}


            </div>

            <C3Chart {...chartProps} />
        </div>
    );
};

export default KeyRatiosAnalyses;