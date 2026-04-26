import { BASE_URL } from "@/utils/const";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<any[], void>({
      query: () => "/articles",
    }),
  }),
});

export const { useGetArticlesQuery } = apiSlice;
