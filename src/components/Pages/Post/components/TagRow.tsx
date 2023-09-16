import { ITag } from '../../../../models/Post'
import { addTagToAdd } from '../../../../store/slices/tagSlice'
import { useAppDispatch } from '../../../../hooks/hooks';
import { PlusCircleFilled } from '@ant-design/icons';

interface ITagRow {
    text: string,
    tags: ITag[] | undefined
}

export default function TagRow({ text, tags }: ITagRow) {
    const dispatch = useAppDispatch();

    const onTagAddHandler = (tag: ITag) => {
        dispatch(addTagToAdd(tag))
    }

    return (
        <>
            {tags && tags?.length > 0 &&
                <div className='flex items-start'>
                    <div className='rounded-2xl mr-2 text-sm text-white border border-none px-2 py-2 bg-sky-600'>{text}:</div>
                    <div className='flex gap-1 flex-wrap flex-row'>
                        {tags?.map(t =>
                            <div className='flex items-center gap-3 rounded-2xl text-sm text-white border px-2 py-2 bg-pink-700 border-none hover:cursor-pointer'
                                key={t.code}
                                onClick={() => onTagAddHandler(t)}>
                                <div>{t.name}</div>
                                {
                                    t.postCount !== undefined && t.postCount > 0
                                    && <div className='border-l-2 pl-1 border-indigo-500'>{t.postCount}</div>
                                }
                                <PlusCircleFilled />
                            </div>
                        )}
                    </div>
                </div>}
        </>
    )
}