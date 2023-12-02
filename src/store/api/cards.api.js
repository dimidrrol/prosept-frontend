import { errorActions } from '../error/error.slice';
import { api } from './api';

export const cardsApi = api.injectEndpoints({
    endpoints: builder => ({
        getMatches: builder.query({
            query: () => '/matching',
            providesTags: () => [{
                type: 'Cards',
            }],
        }),
        getStatistics: builder.query({
            query: () => '/statistics',
        }),
        deleteDealerCard: builder.mutation({
            query: ({ dealer_product_id }) => ({
                url: `/matching/${dealer_product_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: () => [{
                type: 'Cards',
            }],
            async onCacheEntryAdded(_, { dispatch }) {
                try {
                } catch (err) {
                    dispatch(errorActions.setError(err))
                }
            }
        }),
        moveCardToEnd: builder.mutation({
            query: ({ dealer_product_id }) => ({
                url: `/matching/${dealer_product_id}`,
                method: 'PATCH',
            }),
            invalidatesTags: () => [{
                type: 'Cards',
            }],
            async onCacheEntryAdded(_, { }) {
                try {
                } catch (err) {
                    dispatch(errorActions.setError(err))
                }
            }
        }),
        postPair: builder.mutation({
            query: ({ dealer_product_id }) => ({
                url: `/matching/${dealer_product_id}`,
                method: 'POST',
            }),
            invalidatesTags: () => [{
                type: 'Cards',
            }],
            async onCacheEntryAdded(_, { }) {
                try {
                } catch (err) {
                    dispatch(errorActions.setError(err))
                }
            }
        })
    })
})

export const {
    useGetMatchesQuery,
    useDeleteDealerCardMutation,
    useMoveCardToEndMutation,
    usePostPairMutation,
    useGetStatisticsQuery,
} = cardsApi;
