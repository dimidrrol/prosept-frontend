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
            invalidatesTags: (_, err) => !err ? [{
                type: 'Cards',
            }] : [],
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                } catch (err) {
                    const { error } = err;
                    dispatch(errorActions.setError(error.status === 'FETCH_ERROR' ? error.error : error.data.detail));
                }
            }
        }),
        moveCardToEnd: builder.mutation({
            query: ({ dealer_product_id }) => ({
                url: `/matching/${dealer_product_id}`,
                method: 'PATCH',
            }),
            invalidatesTags: (_, err) => !err ? [{
                type: 'Cards',
            }] : [],
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                } catch (err) {
                    const { error } = err;
                    dispatch(errorActions.setError(error.status === 'FETCH_ERROR' ? error.error : error.data.detail));
                }
            }
        }),
        postPair: builder.mutation({
            query: ({ dealer_product_id, prosept_id }) => ({
                url: `/matching/${dealer_product_id}`,
                method: 'POST',
                body: { prosept_id },
            }),
            invalidatesTags: (_, err) => !err ? [{
                type: 'Cards',
            }] : [],
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                } catch (err) {
                    const { error } = err;
                    dispatch(errorActions.setError(error.status === 'FETCH_ERROR' ? error.error : error.data.detail));
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
