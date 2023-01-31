import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const API_NEWS_KEY = import.meta.env.VITE_API_NEWS_KEY;
const API_NEWS_HOST = import.meta.env.VITE_API_NEWS_HOST;

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": API_NEWS_KEY,
  "X-RapidAPI-Host": API_NEWS_HOST,
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({
  method: "GET",
  url: `${baseUrl}${url}`,
  params: { safeSearch: "Off", textFormat: "Raw" },
  headers: cryptoNewsHeaders,
});

export const cryptoNews = createApi({
  reducerPath: "cryptoNews",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNews;
