import React from 'react'
import { useAppSelector } from '../../../../hooks/hooks'
import TagFilterList from './TagFilterList';

enum TypeAction {
    include,
    ignore
}

export default function FilterTags() {
    const ignoreTagList = useAppSelector(state => state.tagState.filterIgnoreTag);
    const includeTagList = useAppSelector(state => state.tagState.filterIncludeTag);
    return (
        <div className='mt-2 flex flex-col gap-3'>
            <TagFilterList tags={includeTagList} text='include' type={TypeAction.include} />
            <TagFilterList tags={ignoreTagList} text='ignore' type={TypeAction.ignore} />
        </div>
    )
}
