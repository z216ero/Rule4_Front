import React from 'react'
import { ITag } from '../../../models/Post'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { MinusCircleFilled } from '@ant-design/icons';
import { removeTagFromList } from '../../../store/slices/tagSlice';

export default function SelectedTags() {
    const tags = useAppSelector(state => state.tagState.selectedTagsToAdd);
    const dispatch = useAppDispatch();

    const onTagRemoveHandler = (tag: ITag) => {
        dispatch(removeTagFromList(tag))
    }
    return (
        <div className='my-2 flex gap-1 items-center'>
            <div className='mr-1'>Selected Tags:</div>
            <div className='flex gap-2 flex-wrap'>
                {tags.length === 0 && <div>no chosen</div>}
                {tags.map(tag =>
                    <div className='flex items-center gap-3 rounded-2xl text-sm text-white border px-2 py-2 bg-pink-700 border-none hover:cursor-pointer'
                        key={tag.code}
                        onClick={() => onTagRemoveHandler(tag)}>
                        <div>{tag.name}</div>

                        <MinusCircleFilled />
                    </div>
                )}
            </div>
        </div>
    )
}
