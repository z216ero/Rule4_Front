import React, { useEffect } from 'react'
import PostService from '../api/postService'
import { useFetchData } from '../hooks/useFetchData';
import PostPreview from './PostPreview';
import { IPost } from '../models/Post';

export default function PostsList() {
    const { isLoading, data, error } = useFetchData<IPost[]>(PostService.getAllPost);

    if (isLoading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (

        <div className='w-[70%] flex flex-wrap gap-2 mt-3'>{data?.map(p =>
            <PostPreview key={p.id} post={p} />
        )}
        </div>
    )
}
