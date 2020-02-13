
import React from 'react';
import { useClient } from './GraphQLClient.hook';
import queries from '../graphql/queries';
import axios from 'axios';
// import { deleteManyClientsMutation } from '../graphql/mutations/client.mutation';

const { companiesQuery: companyQuery, companyKeyRatiosQuery, getCompanyKeyRatiosQuery } = queries;

const useApiClient = () => {

    const client = useClient();

    const uploaKeyRatios = async (fileList: FileList) => {
        const url = '/api/uploadData';

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post(url, getFormData(fileList), config);
        console.log(data);
        return data;
    }

    function getFormData(fileList: FileList): FormData {
        const formData = new FormData();

        for (let index in fileList) {
            formData.append('key-ratios-csv', fileList[index]);
        }

        return formData;
    }

    const getCompanies = async () => {
        const res = await client.request(companyQuery);
        return res.companies;
    }

    const getKeyRatiosPerCompany = async (companyId: string) => {
        const res = await client.request(companyKeyRatiosQuery, { id: companyId });
        return res.company.keyRatios;
    }

    const getKeyRatiosValues = async (companyId: string, keyRatios) => {
        const res = await client.request(getCompanyKeyRatiosQuery(keyRatios), { id: companyId });
        return res.company.keyRatios;
    }


    return {
        uploaKeyRatios,
        getCompanies,
        getKeyRatiosPerCompany,
        getKeyRatiosValues
    }
};

export default useApiClient;