// src/redux/api/magazineApi.ts

import { BASE_URL } from "@/utils/const";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Magazine {
  id: string;
  title: string;
}

export const magazineApi = createApi({
  reducerPath: "magazineApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
