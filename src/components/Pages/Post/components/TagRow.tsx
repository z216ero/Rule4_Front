import React from 'react'
import { ITag } from '../../../../models/Post'

interface ITagRow {
    text: string,
    tags: ITag[] | undefined
}

export default function TagRow({ text, tags }: ITagRow) {
    return (
        <>
            {tags && tags?.length > 0 &&
                <div className='flex items-center'>
                    <div className='rounded-2xl mr-2 text-sm text-white border border-none px-2 py-2 bg-sky-600'>{text}:</div>
                    <div className='flex gap-1'>
                        {tags?.map(t =>
                            <div className='rounded-2xl text-sm text-white border px-2 py-2 bg-pink-700 border-none'
                                key={t.code}>{t.name}
                            </div>
                        )}
                    </div>
                </div>}
        </>
    )
}
