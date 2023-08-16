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
        })
    })
})

export const { useGetTagsQuery } = tagService;