import React, { useState } from 'react';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import SearchTagPanel from './SearchTagPanel';
import SelectedTags from './SelectedTags';
import { useAppSelector } from '../../../hooks/hooks';
import { useAddPostMutation } from '../../../services/postService';
import { IAddPost, IAddTag, TagType } from '../../../models/Post';

const UploadForm: React.FC = () => {
    const [addPost] = useAddPostMutation();
    const selectedTags = useAppSelector(state => state.tagState.selectedTagsToAdd)
    const [form] = Form.useForm();
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = ({ file }: any) => {
        console.log(file)
        setFile(file);
    };

    const handleSubmit = async (values: any) => {
        if (!file || selectedTags.length === 0) {
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('tags',JSON.stringify(selectedTags));

        try {
            await addPost(formData);
        } catch (error) {
        }
    };

    return (
        <Form form={form} onFinish={handleSubmit}>
            <SearchTagPanel />
            <SelectedTags />
            <Form.Item name="file" label="Choose content" required>
                <Upload accept=".jpg,.jpeg,.png,.gif,.mp4"
                    maxCount={1}
                    fileList={[]}
                    onChange={handleFileChange}
                    beforeUpload={() => false}>
                    <Button icon={<UploadOutlined />}>upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" disabled={selectedTags.length < 1 || file === null}>
                    Upload post
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UploadForm;
