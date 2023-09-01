import React from 'react'
import { useState } from 'react';
import { Input } from 'antd';
import { useGetTagsByNameQuery } from '../../../services/tagService';
import TagList from '../../Pages/Post/components/TagList';

export default function SearchTagPanel() {
    const [filterName, setFilterName] = useState<string>("");

    const { data, isError, isLoading } = useGetTagsByNameQuery(filterName);

    const filterNameSetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterName(value);
    }

    return (
        <div>
            <TagList tags={data} />
            <div className='mt-2'>
                <Input onChange={filterNameSetHandler} value={filterName} />
            </div>
        </div>
    );
}
