import { api } from './api';
import { TOKEN_NAME } from '../../utils/constants'

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation({
      query: ({ username, password }) => ({
        body: { username, password },
        url: '/token',
        method: 'POST',
      }),
      async onCacheEntryAdded(_, { cacheDataLoaded, getCacheEntry }) {
        try {
          await cacheDataLoaded;
          const { access_token } = getCacheEntry();
          localStorage.setItem(TOKEN_NAME, access_token)
        } catch (err) {
          console.log(err)
        }
      },
      invalidatesTags: (_, error) => !error ? [{ type: 'User' }] : [],
    }),
    signUp: builder.mutation({
      query: ({ username, password, }) => ({
        body: { username, password },
        url: '/users',
        method: 'POST',
      }),
    }),
    // getCurrentUser: builder.query({
    //   query: () => '/users/me',
    //   providesTags: () => [{
    //     type: 'User',
    //   }],
    // }),
  })
})

export const {
  useSignInMutation,
  useSignUpMutation,
} = userApi;
