import { api } from './api';

export const cardsApi = api.injectEndpoints({
    endpoints: builder => ({
        getMatches: builder.query({
            query: () => '/matching',
            providesTags: () => [{
                type: 'Cards',
            }],
        }),
        deleteDealerCard: builder.mutation({
            query: ({ dealer_product_id }) => ({
                url: `/matching/${dealer_product_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: () => [{
                type: 'Cards',
            }],
        }),
        moveCardToEnd: builder.mutation({
            query: ({ dealer_product_id }) => ({
                url: `/matching/${dealer_product_id}`,
                method: 'PATCH',
            }),
            invalidatesTags: () => [{
                type: 'Cards',
            }],
        })
    })
})

export const {
    useGetMatchesQuery,
    useDeleteDealerCardMutation,
    useMoveCardToEndMutation,
} = cardsApi;
