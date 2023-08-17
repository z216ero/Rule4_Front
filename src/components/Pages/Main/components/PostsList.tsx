import PostPreview from '../../Post/components/PostPreview';
import { useGetPostsQuery } from '../../../../services/postService';
import DataWrapper from '../../../DataWrapper';

export default function PostsList() {
    const { isError, isLoading, data } = useGetPostsQuery("")

    if (data?.length === 0) {
        return <div>No posts</div>
    }

    return (
        <div className='w-[70%] flex flex-wrap gap-2 mt-3'>
            <DataWrapper isError={isError} isLoading={isLoading} data={data}>
                {data?.map(p =>
                    <PostPreview key={p.id} post={p} />)}
            </DataWrapper>
        </div>
    )
}
