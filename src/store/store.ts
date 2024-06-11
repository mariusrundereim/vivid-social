import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./posts/apiSlice";
import { profilesApi } from "./profiles/apiSlice";
import { authApi } from "./auth/apiSlice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [profilesApi.reducerPath]: profilesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      profilesApi.middleware,
      authApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;