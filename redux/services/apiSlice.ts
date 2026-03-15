import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<any[], void>({
      query: () => "/articles",
    }),
  }),
});

export const { useGetArticlesQuery } = apiSlice;
