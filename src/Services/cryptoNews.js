import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

let API_NEWS_KEY;
let API_NEWS_HOST;

try {
  API_NEWS_KEY = import.meta.env.VITE_API_NEWS_KEY;
  API_NEWS_HOST = import.meta.env.VITE_API_NEWS_HOST;
} catch (error) {
  console.error("Error: Failed to get API_NEWS_KEY and API_NEWS_HOST");
}

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": API_NEWS_KEY,
  // "X-RapidAPI-Host": API_NEWS_HOST,
  "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
};

// const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const baseUrl = "https://crypto-news-live3.p.rapidapi.com";

const createRequest = (url) => ({
  method: "GET",
  url: `${baseUrl}${url}`,
  // url: "https://bing-news-search1.p.rapidapi.com/news",
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
          // `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
          `/news`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNews;
