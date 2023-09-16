import React from 'react'
import TagFilter from './components/TagFilter'
import PostsList from './components/PostsList'

export default function Main() {
    return (
        <div className='flex h-full'>
            <TagFilter />
            <PostsList />
        </div>
    )
}
