import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default function AddPost() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='text-slate-100 text-xl hover:cursor-pointer' onClick={showModal}>
                Add Post
            </div>
            <Modal title="Add Post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}
