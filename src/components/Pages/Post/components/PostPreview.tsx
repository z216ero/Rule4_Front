import { useState } from 'react';
import { Link } from 'react-router-dom'
import { IPost } from '../../../../models/Post';

interface IPostPreview {
    post: IPost
}

export default function PostPreview({ post }: IPostPreview) {
    const [isHovered, setIsHovered] = useState(false);
    const videoStyle = {
        width: '100%', // Ширина видео будет равна ширине контейнера
        height: '100%', // Высота видео будет равна высоте контейнера
        objectFit: 'cover', // Заполняем видео элементом контейнера
        position: 'absolute', // Позиционируем видео абсолютно
        top: '50%', // Положение сверху на 50%
        left: '50%', // Положение слева на 50%
        transform: 'translate(-50%, -50%)', // Центрируем видео
    };

    return (
        <Link to={`post/${post.id}`} className='h-[440px] w-[440px] flex border overflow-hidden relative'>

            {post?.fileExtension === ".mp4" && (
                <video
                  
                    className='w-full h-full object-cover   top-[50%] left-[50%] translate-x-[50%] translate-y-[50]'
                    controls={true}
                    autoPlay={isHovered}
                >
                    <source src={post?.imagePath}></source>
                </video>
            )}

            {post?.fileExtension !== ".mp4" &&
                <img alt='post' src={post.imagePath} className='flex justify-between px-3 w-full h-full'>
                </img>
            }
        </Link >
    )
}
