import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create api slice
const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }),
  endpoints: (builder) => ({
    getAllDevs: builder.query({
      query: () => "/devs",
    }),
    getSingleDevs: builder.query({
      query: (id) => `/devs/${id}`,
    }),
    deleteDevs: builder.mutation({
      query: (id) => ({
        url: `/devs/${id}`,
        method: "DELETE",
      }),
    }),
    createDevs: builder.mutation({
      query: (data) => ({
        url: "/devs",
        method: "POST",
        body: data,
      }),
    }),
    updateDevs: builder.mutation({
      query: (data) => ({
        url: `/devs/${data.id}`,
        method: "PATCH",
        body: data.data,
      }),
    }),
  }),
});

// export api
export const {
  useGetAllDevsQuery,
  useGetSingleDevsQuery,
  useDeleteDevsMutation,
  useCreateDevsMutation,
  useUpdateDevsMutation,
} = apiSlice;
export default apiSlice;
