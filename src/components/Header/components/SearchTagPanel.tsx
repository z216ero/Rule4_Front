import React from 'react'
import { useState } from 'react';
import { Input } from 'antd';
import { useGetTagsByNameQuery } from '../../../services/tagService';

export default function SearchTagPanel() {
    const [filterName, setFilterName] = useState<string>("");

    const { data, isError, isLoading } = useGetTagsByNameQuery(filterName);

    const filterNameSetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterName(value);
    }

    return (
        <div>
            {data?.map(tag => <div key={tag.code}>{tag.name} {tag.postCount}</div>)}
            <Input onChange={filterNameSetHandler} value={filterName} />
        </div>
    );
}
