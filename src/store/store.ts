import {combineReducers,configureStore} from "@reduxjs/toolkit"

const rootReducer = combineReducers({

})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = typeof setupStore.dispatch

// const store = configureStore({
//     reducer: {
//       posts: postsReducer,
//       comments: commentsReducer,
//       users: usersReducer
//     }
//   })
  
//   // Infer the `RootState` and `AppDispatch` types from the store itself
//   export type RootState = ReturnType<typeof store.getState>
//   // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//   export type AppDispatch = typeof store.dispatch