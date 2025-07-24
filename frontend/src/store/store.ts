import { combineReducers, configureStore } from "@reduxjs/toolkit"
import articleSlice from "./reducers/articleSlice"
import { articleApi } from "../services/articleApi"

export const rootReducer = combineReducers({
    articleSlice,
    [articleApi.reducerPath]: articleApi.reducer,
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        articleApi.middleware
    ),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']