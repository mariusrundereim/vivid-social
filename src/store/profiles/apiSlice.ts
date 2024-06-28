import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Profile } from "./types";
// import { load } from "../../utils/localStorage/load";
import { RootState } from "../store";
import { API_BASE_URL } from "../../constants/apiEndpoints";

export const profilesApi = createApi({
  reducerPath: "profilesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getAllProfiles: builder.query<Profile[], void>({
      query: () => "profiles",
      providesTags: ["Profile"],
    }),
    getProfile: builder.query<Profile, string>({
      query: (name) => `profiles/${name}`,
      providesTags: (result, error, name) => [{ type: "Profile", id: name }],
    }),
  }),
});

export const { useGetAllProfilesQuery, useGetProfileQuery } = profilesApi;
