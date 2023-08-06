import React from 'react'
import { ITag } from '../models/Post'

interface ITagList {
    tags: ITag[] | undefined
}

export default function TagList({ tags }: ITagList) {
    console.log(tags);
    return (
        <div className='mt-5'>
            {
                tags?.map(t =>
                    <div key={t.code}>{t.name}</div>
                )
            }
        </div>
    )
}
