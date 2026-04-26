import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Issue, IssueWithArticles } from "@/types/issue";
import { BASE_URL } from "@/utils/const";

export const issueApi = createApi({
  reducerPath: "issueApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Issue"],

  endpoints: (builder) => ({
    // ✅ GET ALL
    getIssues: builder.query<
      { data: Issue[]; total: number },
      {
        page?: number;
        limit?: number;
        categoryId?: string;
        magazineId?: string;
        search?: string;
      }
    >({
      query: ({ page = 1, limit = 5, categoryId, magazineId, search }) => {
        let url = `issue?page=${page}&limit=${limit}`;

        if (categoryId) url += `&categoryId=${categoryId}`;
        if (magazineId) url += `&magazineId=${magazineId}`;
        if (search) url += `&search=${search}`;

        return url;
      },
    }),

    // ✅ GET ONE (🔥 FIX HERE)
    getIssueById: builder.query<IssueWithArticles, string>({
      query: (id) => `issue/${id}`,
      providesTags: (result, error, id) => [{ type: "Issue", id }],
    }),

    // 🔥 THIS WEEK ISSUE
    getThisWeekIssue: builder.query<Issue, void>({
      query: () => "issue/this-week",
      providesTags: ["Issue"],
    }),

    // 🔥 LATEST ISSUES (limit support)
    getLatestIssues: builder.query<
      Issue[],
      { limit?: number; categoryId?: string } | void
    >({
      query: (params) => {
        const limit = params?.limit || 4;
        const categoryId = params?.categoryId;

        let url = `issue/latest?limit=${limit}`;

        if (categoryId) {
          url += `&categoryId=${categoryId}`;
        }

        return url;
      },
      providesTags: ["Issue"],
    }),
  }),
});

export const {
  useGetIssuesQuery,
  useGetIssueByIdQuery,
  useGetThisWeekIssueQuery,
  useGetLatestIssuesQuery,
} = issueApi;
