import React from 'react'
import { Spin } from 'antd';

interface IDataWrapper {
    isLoading: boolean,
    isError: boolean,
    data: any,
    children: React.ReactNode
}

export default function DataWrapper({ isLoading, isError, data, children }: IDataWrapper) {

    if (isError)
        return (
            <div className='w-full h-full flex items-center justify-center'>
                Error
            </div>
        )

    if (isLoading)
        return (
            <div className='w-full h-full flex items-center justify-center'>
                <Spin size='large' />
            </div>
        )

    return (
        <div>{children}</div>
    )
}
