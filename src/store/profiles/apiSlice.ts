import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Profile } from "./types";

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getAllProfiles: builder.query<Profile[], void>({
      query: () => "profiles",
      providesTags: ["Profile"],
    }),
    getProfile: builder.query<Profile, string>({
      query: (email) => `profiles/${email}`,
      providesTags: (result, error, email) => [{ type: "Profile", id: email }],
    }),
  }),
});

export const { useGetAllProfilesQuery, useGetProfileQuery } = profilesApi;
