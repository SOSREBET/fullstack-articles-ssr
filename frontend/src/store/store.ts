import { combineReducers, configureStore } from "@reduxjs/toolkit"
// import { userApi } from "../services/userApi"

export const rootReducer = combineReducers({
    // Slices (reducers)
    // API reducers [userApi.reducerPath]: userApi.reducer,
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        // API userApi.middleware
    ),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']