import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '../appsetting';
import { IPost } from '../models/Post';

export const postService = createApi({
    tagTypes: ["Posts"],
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.url}/Post`,
    }),
    endpoints: (build) => ({
        getPosts: build.query<IPost[], any>({
            query: () => 'Get',
        }),
        getPost: build.query<IPost, any>({
            query: (postId: number) => `GetById?postId=${postId}`
        }),
        addPost: build.mutation<void, FormData>({
            query: (post: FormData) => ({
                method: "POST",
                url: "Add",
                body: (post),
            })
        })
    })
})

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } = postService;