import React, { useState } from 'react';
import { Form, Upload, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TagList from '../../Ui/TagList';

import SearchTagPanel from './SearchTagPanel';

const { Option } = Select;

const UploadForm: React.FC = () => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<any[]>([]); // Типизируйте fileList по своей структуре
    const [tags, setTags] = useState<string[]>([]);

    const handleFileChange = ({ fileList }: any) => {
        setFileList(fileList.slice(-1)); // Ограничиваем список до одного элемента
    };

    const handleTagChange = (selectedTags: string[]) => {
        setTags(selectedTags);
    };

    const handleSubmit = async (values: any) => {
        const formData = new FormData();
        formData.append('file', fileList[0].originFileObj);
        formData.append('tags', JSON.stringify(tags));

        // Отправка formData на сервер
        // Пример: await fetch('/api/upload', { method: 'POST', body: formData });
    };

    return (
        <Form form={form} onFinish={handleSubmit}>
            <SearchTagPanel />
            
            <Form.Item name="file" label="Choose content">
                <Upload
                    accept=".jpg,.jpeg,.png,.gif,.mp4"
                    fileList={fileList}
                    onChange={handleFileChange}
                    beforeUpload={() => false}
                    multiple={false}
                >
                    <Button icon={<UploadOutlined />}>upload</Button>
                </Upload>
            </Form.Item>

            <Form.Item name="tags" label="Tags">
                <TagList></TagList>
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit">
                    Upload post
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UploadForm;
