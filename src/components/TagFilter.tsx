import React from 'react'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import { Select, Tag } from 'antd';
import { useGetTagsQuery } from '../services/tagService';
import { Spin } from 'antd';
import { useAppSelector } from '../hooks/hooks';

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

interface ITest {
    value: string
}

const tagRender = (props: CustomTagProps) => {

    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3 }}
        >
            {label}
        </Tag>
    );
};


export default function TagFilter() {
    //useAppSelector(state=>state.)
    const { data, isLoading, isError } = useGetTagsQuery('', {
        selectFromResult: ({ data, isLoading, isError }) => ({
            data: data?.map(m => ({ value: m.name })),
            isLoading,
            isError
        })
    });

    if (isLoading)
        return <Spin />

    return (
        <div className='w-[30%]'>
            <Select allowClear={true}
                options={data}
                mode='multiple'
                style={{ width: '100%' }}
            >

            </Select>
            <Tag >qwe</Tag>
        </div>
    )
}
