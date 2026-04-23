// src/redux/api/magazineApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Magazine {
  id: string;
  title: string;
}

export const magazineApi = createApi({
  reducerPath: "magazineApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Magazine"],

  endpoints: (builder) => ({
    getMagazines: builder.query<Magazine[], void>({
      query: () => "magazine",
      providesTags: ["Magazine"],
    }),
  }),
});

export const { useGetMagazinesQuery } = magazineApi;
