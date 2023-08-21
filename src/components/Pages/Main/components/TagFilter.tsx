import React from 'react'
import { Select, Tag } from 'antd';
import { useGetTagsQuery } from '../../../../services/tagService';
import { useAppSelector } from '../../../../hooks/hooks';
import DataWrapper from '../../../DataWrapper';

export default function TagFilter() {
    const { data, isLoading, isError } = useGetTagsQuery('', {
        selectFromResult: ({ data, isLoading, isError }) => ({
            data: data?.map(m => ({ value: m.name })),
            isLoading,
            isError
        })
    });

    console.log(data)

    return (
        <div className='w-[30%]'>
            <DataWrapper isError={isError} isLoading={isLoading} data={data}>
                <Select allowClear={true}
                    options={data}
                    mode='multiple'
                    style={{ width: '100%' }} />
            </DataWrapper>
        </div>
    )
}
