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
        addPost: build.mutation<IPost, IPost>({
            query: (post: IPost) => ({
                method: "POST",
                url: "Add",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: post
            }),
            invalidatesTags: ["Posts"]
        })
    })
})

export const { useGetPostsQuery, useGetPostQuery } = postService;