import { useCallback } from 'react';
import { useParams } from "react-router-dom"
import { useFetchData } from '../hooks/useFetchData';
import { IPost } from '../models/Post';
import PostService from '../api/postService'
import TagList from './TagList';

export default function Post() {
    const { id } = useParams();
    const fetchDataCallback = useCallback(() => PostService.getPost(id), [id]);
    const { isLoading, data, error } = useFetchData<IPost>(fetchDataCallback);

    if (isLoading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className='flex items-center mt-3 flex-col'>
            <img src={data?.imagePath} alt='wqe'></img>
            <TagList tags={data?.tags} />
        </div>
    )
}
