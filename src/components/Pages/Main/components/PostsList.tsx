import PostPreview from '../../Post/components/PostPreview';
import { useGetFilteredPostQuery } from '../../../../services/postService';
import DataWrapper from '../../../DataWrapper';
import { useAppSelector } from '../../../../hooks/hooks';

export default function PostsList() {
    const ignoreTags = useAppSelector(state => state.tagState.filterIgnoreTag);
    const includeTags = useAppSelector(state => state.tagState.filterIncludeTag);
    const { isError, isLoading, data } = useGetFilteredPostQuery({ includeTags, ignoreTags })

    if (data?.length === 0) {
        return <div>No posts</div>
    }

    return (
        <div className='w-[85%] '>
            <DataWrapper isError={isError} isLoading={isLoading} data={data}>
                <div className='flex flex-wrap gap-2 mt-3'>
                    {data?.map(p =>
                        <PostPreview key={p.id} post={p} />)}
                </div>
            </DataWrapper>
        </div>
    )
}
