import React, { useState } from 'react';
import { Button, Modal, Form, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import SearchTagPanel from './SearchTagPanel';
import SelectedTags from './SelectedTags';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { useAddPostMutation } from '../../../services/postService';
import type { UploadFile } from 'antd/es/upload/interface';
import { Error } from '../../../models/Error';
import { clearTagList } from '../../../store/slices/tagSlice';

export default function AddPost() {
    const dispatch = useAppDispatch();
    const [addPost] = useAddPostMutation();

    const selectedTags = useAppSelector(state => state.tagState.selectedTagsToAdd)
    const [form] = Form.useForm();
    const [file, setFile] = useState<File | null>(null);
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleFileChange = ({ file, fileList }: any) => {
        if (file?.status === "removed") {
            setFile(null);
        }
        else {
            setFile(file);
        }
        setFileList(fileList);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        if (selectedTags.length === 0) {
            message.error("Choose 1 tag at least")
            return;
        }

        if (!file) {
            message.error("Choose file")
            return;
        }

        setConfirmLoading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('tags', JSON.stringify(selectedTags));

        try {
            await addPost(formData);
            message.success('Success');

            dispatch(clearTagList());
            setFile(null);

        } catch (error) {
            const axiosError = error as Error;
            if (axiosError.data) {
                message.error(`Error: ${axiosError.data.title}`);
            } else {
                message.error('Unknown Error.');
            }
        }

        setConfirmLoading(false);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        dispatch(clearTagList());
        setFile(null);
        setFileList([]);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='text-slate-100 text-xl hover:cursor-pointer' onClick={showModal}>
                New
            </div>
            <Modal title="Add Post"
                open={isModalOpen}
                onOk={handleOk} onCancel={handleCancel}
                okButtonProps={{ type: "default" }}
                confirmLoading={confirmLoading} >
                <Form form={form}>
                    <SearchTagPanel />
                    <SelectedTags />
                    <Form.Item name="file" label="Choose content" required>
                        <Upload accept=".jpg,.jpeg,.png,.gif,.mp4"
                            maxCount={1}
                            fileList={fileList}
                            onChange={handleFileChange}
                            beforeUpload={() => false}>
                            <Button icon={<UploadOutlined />}>upload</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
