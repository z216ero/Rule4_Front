import { configureStore } from "@reduxjs/toolkit"
import { postService } from "../services/postService"
import { tagService } from "../services/tagService"
import tagSlice from "./slices/tagSlice"

export const store = configureStore({
    reducer: {
        [tagService.reducerPath]: tagService.reducer,
        [postService.reducerPath]: postService.reducer,
        "tagState": tagSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(tagService.middleware)
        .concat(postService.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch