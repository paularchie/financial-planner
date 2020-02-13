const companiesQuery = `
    query {
        companies {
            id,
            companyName
            tickerSymbol
        }
    }
`

const companyKeyRatiosQuery = `
    query($id: ID!) {
        company(where: {id: $id}) {
            keyRatios {
                earningsPerShare
                dividends
                bookValuePerShare
                freeCashFlow
                freeCashFlowPerShare
                returnOnEquity
                currentRatio
                debtToEquity
            }
        }
    }
`

const getCompanyKeyRatiosQuery = (selectedKeyRatios) => 
    `query($id: ID!) {
        company(where: {id: $id}) {
            keyRatios {
                ${selectedKeyRatios}
            }
        }
    }
`


  export default {
      companiesQuery,
      companyKeyRatiosQuery,
      getCompanyKeyRatiosQuery
  }