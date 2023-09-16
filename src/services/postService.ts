import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '../appsetting';
import { IFIlterModel, IPost, ITag } from '../models/Post';

export const postService = createApi({
    tagTypes: ["Posts"],
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.url}/Post`,
    }),
    endpoints: (build) => ({
        getPost: build.query<IPost, any>({
            query: (postId: number) => `GetById?postId=${postId}`
        }),
        getFilteredPost: build.query<IPost[], any>({
            query: (filterModel: IFIlterModel) => ({
                method: "POST",
                url: "Get",
                body: {
                    include: filterModel.includeTags.map(c => c.code),
                    ignore: filterModel.ignoreTags.map(c => c.code)
                }
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
                        { type: 'Posts', id: 'LIST' },
                    ]
                    : [{ type: 'Posts', id: 'Posts' }],
        }),
        addPost: build.mutation<void, FormData>({
            query: (post: FormData) => ({
                method: "POST",
                url: "Add",
                body: (post),
            }),
            invalidatesTags: ["Posts"]
        })
    })
})

export const { useGetFilteredPostQuery, useGetPostQuery, useAddPostMutation } = postService;