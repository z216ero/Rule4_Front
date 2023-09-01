import { ITag, TagType } from '../../../../models/Post'
import TagRow from './TagRow'
import { memo } from 'react';

interface ITagList {
    tags: ITag[] | undefined
}

const TagList = memo(function TagList({ tags }: ITagList) {
    const copyright = tags?.filter(t => t.type === TagType.Copyright)
    const generals = tags?.filter(t => t.type === TagType.General)
    const artists = tags?.filter(t => t.type === TagType.Artist)
    const characters = tags?.filter(t => t.type === TagType.Character)

    return (
        <div className='flex gap-2 flex-col'>
            <TagRow text='Copyright' tags={copyright} />
            <TagRow text='General' tags={generals} />
            <TagRow text='Artists' tags={artists} />
            <TagRow text='Characters' tags={characters} />
        </div >
    )
});

export default TagList
