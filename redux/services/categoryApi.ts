import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Category {
  id: string;
  name: string;
}

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Category"],

  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "category",
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;