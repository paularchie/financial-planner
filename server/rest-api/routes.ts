import * as multer from 'multer';
import * as fs from 'fs';
import * as csv from 'fast-csv';

const upload = multer({ dest: `${'temp-upload-files'}/` });

const companyData = [
    'Company Name',
    'Ticker Symbol',
    'Earnings Per Share USD',
    'Dividends USD',
    'Book Value Per Share * USD',
    'Free Cash Flow USD Mil',
    'Free Cash Flow Per Share * USD',
    'Return on Equity %',
    'Current Ratio',
    'Debt/Equity'
];

const companyDataPropertyMap = {
    'Company Name': 'companyName',
    'Ticker Symbol': 'tickerSymbol',
    'Earnings Per Share USD': 'earningsPerShare',
    'Dividends USD': 'dividends',
    'Book Value Per Share * USD': 'bookValuePerShare',
    'Free Cash Flow USD Mil': 'freeCashFlow',
    'Free Cash Flow Per Share * USD': 'freeCashFlowPerShare',
    'Return on Equity %': 'returnOnEquity',
    'Current Ratio': 'currentRatio',
    'Debt/Equity': 'debtToEquity'
};

export const routes = (app, prisma) => {

    app.route('/uploadData').post(upload.single('key-ratios-csv'), async (req, res) => {
        const path: string = req['file'].path;
        const rows = []

        csv.parseFile(path, { headers: false })
            .on("data", function (data) {
                if (companyData.includes(data[0])) {
                    rows.push(data)
                }
            })
            .on("end", async function () {
                fs.unlink(path, () => console.log('success'));

                try {
                    const newCompany = await createCompany(rows);
                    res.status(200).send(newCompany);
                } catch (err) {
                    res.status(500).send(err);
                }
            });
    });

    async function createCompany(data): Promise<any> {
        return new Promise(async resolve => {
            const company: any = { keyRatios: { create: {} } };
            data.forEach(item => {
                const description = item[0]
                const prop = companyDataPropertyMap[description]
                if (prop === 'companyName' || prop === 'tickerSymbol') {
                    company[prop] = item[1];
                } else {
                    company.keyRatios.create[prop] = { 
                        values: item.splice(1) ,
                        description: description
                    };
                }
            });

            resolve(await prisma.createCompany(company));
        })
    }
}