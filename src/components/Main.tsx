import React from 'react'
import TagFilter from './TagFilter'
import PostsList from './PostsList'

export default function Main() {
    return (
        <div className='flex'>
            <TagFilter />
            <PostsList />
        </div>
    )
}
