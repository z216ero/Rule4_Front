import React from 'react'
import { useGetTagsQuery } from '../../services/tagService'

export default function TagList() {
    const { data: tags } = useGetTagsQuery('');
    return (
        <div>{tags?.length}</div>
    )
}
