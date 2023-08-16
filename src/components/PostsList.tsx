import PostPreview from './PostPreview';
import { useGetPostsQuery } from '../services/postService';
import { Spin } from 'antd';

export default function PostsList() {
    const { error, isLoading, data } = useGetPostsQuery("")
    if (isLoading) {
        return <Spin />
    }

    if (error) {
        return <div>Ошибка</div>
    }

    return (
        <div className='w-[70%] flex flex-wrap gap-2 mt-3'>{data?.map(p =>
            <PostPreview key={p.id} post={p} />)}
        </div>
    )
}
