import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, Comment } from "./types";
// import { API_BASE_URL } from "../../constants/apiEndpoints";
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Post", "Comment"],
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => "posts",
      providesTags: ["Post"],
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
