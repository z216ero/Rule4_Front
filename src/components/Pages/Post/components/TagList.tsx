import { ITag, TagType } from '../../../../models/Post'
import TagRow from './TagRow'

interface ITagList {
    tags: ITag[] | undefined
}

export default function TagList({ tags }: ITagList) {
    const copyright = tags?.filter(t => t.type === TagType.Copyright)
    const generals = tags?.filter(t => t.type === TagType.General)
    const artists = tags?.filter(t => t.type === TagType.Artist)
    const characters = tags?.filter(t => t.type === TagType.Character)
    return (
        <div className='mt-5 w-[50%] flex gap-2 flex-col'>
            <TagRow text='Copyright' tags={copyright} />
            <TagRow text='General' tags={generals} />
            <TagRow text='Artists' tags={artists} />
            <TagRow text='Characters' tags={characters} />
        </div >
    )
}
