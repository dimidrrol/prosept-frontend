import { errorActions } from '../error/error.slice';
import { api } from './api';

export const cardsApi = api.injectEndpoints({
    endpoints: builder => ({
        getMatches: builder.query({
            query: () => '/matching',
        }),
        getStatistics: builder.query({
            query: () => '/statistics',
        }),
        deleteDealerCard: builder.mutation({
            query: ({ dealer_product_id }) => ({
                url: `/matching/${dealer_product_id}`,
                method: 'DELETE',
            }),
            async onQueryStarted({ dealer_product_id }, { queryFulfilled, dispatch }) {
                const patchResult = dispatch(
                    cardsApi.util.updateQueryData('getMatches', null, (data) => {
                        const index = data.findIndex(item => item.dealer_product.id === dealer_product_id);
                        data.splice(index, 1);
                    })
                )
                try {
                    await queryFulfilled;
                } catch (err) {
                    patchResult.undo();
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
            async onQueryStarted({ dealer_product_id }, { queryFulfilled, dispatch }) {
                const patchResult = dispatch(
                    cardsApi.util.updateQueryData('getMatches', null, (data) => {
                        const index = data.findIndex(item => item.dealer_product.id === dealer_product_id);
                        const thisCard = data.splice(index, 1);
                        data.push(thisCard[0]);
                    })
                )
                try {
                    await queryFulfilled;
                } catch (err) {
                    patchResult.undo();
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
            async onQueryStarted({ dealer_product_id }, { queryFulfilled, dispatch }) {
                const patchResult = dispatch(
                    cardsApi.util.updateQueryData('getMatches', null, (data) => {
                        const index = data.findIndex(item => item.dealer_product.id === dealer_product_id);
                        data.splice(index, 1);
                    })
                )
                try {
                    await queryFulfilled;
                } catch (err) {
                    patchResult.undo();
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
