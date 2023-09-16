import { useGetTagsByNameQuery } from '../../../../services/tagService';
import DataWrapper from '../../../DataWrapper';
import { useState } from 'react';
import { Input, Button } from 'antd';
import { CheckOutlined, StopOutlined } from '@ant-design/icons';
import { IAddTag, TagType } from '../../../../models/Post';
import { addTagToIgnore, addTagToInclude, clearFilterTagList } from '../../../../store/slices/tagSlice';
import { useAppDispatch } from '../../../../hooks/hooks';
import FilterTags from './FilterTags';

export default function TagFilter() {
    const dispatch = useAppDispatch();
    const [filterName, setFilterName] = useState<string>("");
    const { data: tags, isError, isLoading } = useGetTagsByNameQuery(filterName);

    const filterNameSetHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterName(value);
    }
    const clickAddIncludeHandler = (tag: IAddTag) => {
        dispatch(addTagToInclude(tag))
    }

    const clickAddIgnoreHandler = (tag: IAddTag) => {
        dispatch(addTagToIgnore(tag))
    }

    const clickClearHandler = () => {
        dispatch(clearFilterTagList())
    }

    return (
        <div className='w-[15%] px-3 mt-3'>
            <DataWrapper isError={isError} isLoading={isLoading} data={tags}>
                <div className='min-h-[100px] max-h-[400px] overflow-y-auto flex flex-col gap-3 '>
                    {tags?.length === 0 &&
                        <div className='flex justify-center items-center h-[100px]'>Not found any tags</div>}
                    {
                        tags?.map(tag =>
                            <div key={tag.code} className='h-[45px] flex items-center justify-between
                             gap-3 px-2 py-2
                             border rounded-md border-gray-400 divide-solid
                             text-sm'>
                                <div className='w-[50%]'>{tag.name}</div>
                                <div className='w-[15%] flex gap-3'>
                                    <div>{tag.postCount}</div>
                                    <div>{TagType[tag.type]}</div>
                                </div>
                                <div className='flex gap-2 w-[22%]'>
                                    <Button onClick={() => clickAddIncludeHandler(tag)}>
                                        <div className='flex justify-center items-center'>
                                            <CheckOutlined />
                                        </div>
                                    </Button>
                                    <Button type="primary" danger onClick={() => clickAddIgnoreHandler(tag)}>
                                        <div className='flex justify-center items-center'>
                                            <StopOutlined />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className='mt-2'>
                    <Input placeholder='type to search' onChange={filterNameSetHandler} value={filterName} />
                </div>

                <div className='mt-2'>
                    <Button onClick={clickClearHandler}>Clear filter</Button>
                </div>

                <FilterTags />
            </DataWrapper>
        </div>
    )
}
