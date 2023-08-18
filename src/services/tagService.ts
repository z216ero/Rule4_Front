import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '../appsetting';
import { ITag } from '../models/Post';

export const tagService = createApi({
    reducerPath: "tags",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.url}/Tag`,
    }),
    endpoints: (build) => ({
        getTags: build.query<ITag[], any>({
            query: () => 'Get',
        }),
        addTag: build.mutation<boolean, ITag>({
            query: (tag: ITag) => ({
                method: "POST",
                url: "Add",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: tag
            })
        })
    })
})

export const { useGetTagsQuery, useAddTagMutation } = tagService;