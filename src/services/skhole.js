import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const skholeApi = createApi({
  reducerPath: "skholeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://skhole.onrender.com/api/v1" }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => `courses`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCoursesQuery } = skholeApi;
