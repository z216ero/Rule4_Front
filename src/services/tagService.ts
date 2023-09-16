import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '../appsetting';
import { ITag } from '../models/Post';

export const tagService = createApi({
    tagTypes: ["Tags"],
    reducerPath: "tags",
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.url}/Tag`,
    }),
    endpoints: (build) => ({
        getTags: build.query<ITag[], any>({
            query: () => `Get`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ code }) => ({ type: 'Tags' as const, code })),
                        { type: 'Tags', id: 'LIST' },
                    ]
                    : [{ type: 'Tags', id: 'Tags' }]
        }),
        getTagsByName: build.query<ITag[], any>({
            query: (name: string) => `GetByName?name=${name}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ code }) => ({ type: 'Tags' as const, code })),
                        { type: 'Tags', id: 'LIST' },
                    ]
                    : [{ type: 'Tags', id: 'Tags' }],
        }),
        addTag: build.mutation<boolean, ITag>({
            query: (tag: ITag) => ({
                method: "POST",
                url: "Add",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: tag
            }),
            invalidatesTags: ["Tags"]
        })
    })
})

export const { useGetTagsQuery, useAddTagMutation, useGetTagsByNameQuery } = tagService;