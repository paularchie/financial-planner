
export const deleteManyClientsMutation = `
    mutation($ids: [ID!]) { 
        deleteManyClients (
            where: {
                id_in: $ids
            }
        ) { 
           count
        } 
    }
`

export default {
    deleteClientMutation: deleteManyClientsMutation
};