import { ITag } from '../../../../models/Post'
import classNames from 'classnames';
import { MinusCircleFilled } from '@ant-design/icons';
import { removeTagFromIgnore, removeTagFromInclude } from '../../../../store/slices/tagSlice';
import { useAppDispatch } from '../../../../hooks/hooks';

interface ITagFilterList {
    tags: ITag[],
    text: string,
    type: TypeAction
}

enum TypeAction {
    include,
    ignore
}

export default function TagFilterList({ tags, text, type }: ITagFilterList) {
    const dispatch = useAppDispatch();

    const clickRemoveHandler = (tag: ITag) => {
        if (type === TypeAction.ignore) {
            dispatch(removeTagFromIgnore(tag));
        }
        else {
            dispatch(removeTagFromInclude(tag));
        }
    }

    return (
        <div className='flex items-center gap-3'>
            <div className='text-lg'>Tags to {text}:</div>
            <div className='flex gap-3 flex-wrap'>
                {tags?.map(tag =>
                    <div className='flex items-center gap-3
                      rounded-2xl text-sm text-white border px-2 py-2 bg-pink-700 border-none'
                        key={tag.code}                    >
                        <div>{tag.name}</div>
                        <MinusCircleFilled onClick={() => clickRemoveHandler(tag)} />
                    </div>
                )}
            </div>
        </div>
    )
}