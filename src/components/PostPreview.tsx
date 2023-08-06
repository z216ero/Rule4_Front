import React from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../models/Post';

interface IPostPreview {
    post: IPost
}

export default function PostPreview({ post }: IPostPreview) {
    return (
        <Link to={`post/${post.id}`} className='h-[200px] w-[200px] flex border'>            
            <img alt='qwe' src={post.imagePath} className='flex justify-between px-3 w-full h-full'>
            </img>
        </Link>
    )
}
