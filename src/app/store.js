import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/cryptoApi";
import { cryptoNews } from "../Services/cryptoNews";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNews.reducerPath]: cryptoNews.reducer,
  },
  middleware: [
    ...getDefaultMiddleware(),
    cryptoApi.middleware,
    cryptoNews.middleware,
  ],
});
