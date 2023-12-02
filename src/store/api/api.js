import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL_API } from '../../utils/config';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Cards'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL_API}/api/v1`,
  }),
  endpoints: () => ({})
});