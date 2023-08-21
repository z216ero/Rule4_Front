import { useParams } from "react-router-dom"
import TagList from './components/TagList';
import { useGetPostQuery } from '../../../services/postService';
import DataWrapper from "../../DataWrapper";

const parseDate = (dateString: string | undefined): Date => {
    if (dateString != null) {
        const dateObject = new Date(dateString);
        if (isNaN(dateObject.getTime())) {
            return new Date();
        }

        return dateObject;
    }

    return new Date();
};

const getTimeAgoString = (date: Date): string => {
    const now = new Date();
    const diffInMillis = now.getTime() - date.getTime();
    const diffInMinutes = Math.round(diffInMillis / (1000 * 60));

    if (diffInMinutes < 1) {
        return "just now";
    } else if (diffInMinutes === 1) {
        return "a minute ago";
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
        const diffInHours = Math.floor(diffInMinutes / 60);
        return `${diffInHours} hour${getHourEnding(diffInHours)} ago`;
    } else {
        return date.toDateString();
    }
};

const getHourEnding = (hours: number): string => {
    const lastDigit = hours % 10;
    if (hours >= 11 && hours <= 14) {
        return "s";
    } else if (lastDigit === 1) {
        return "";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return "s";
    } else {
        return "s";
    }
};

export default function Post() {
    const { id } = useParams();
    const { isLoading, data: post, isError } = useGetPostQuery(id);

    const dateObject = getTimeAgoString(parseDate(post?.added));

    return (
        <DataWrapper isLoading={isLoading} isError={isError} data={post} >
            <div className='flex items-center mt-3 flex-col'>
                <img src={post?.imagePath} alt='wqe'></img>
                <TagList tags={post?.tags} />
                <div className='text-white'>Published : {dateObject} Likes: {post?.likeCount} View: {post?.viewCount}</div>
            </div>
        </DataWrapper>
    )
}