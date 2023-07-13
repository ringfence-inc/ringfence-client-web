import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { Typography } from 'antd';
import { Button } from 'antd';
import '../upload-images/UploadImagesStyle.css';
import { UploadOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface Images
{
    name: string
    bytes: string
}



const colStyle: React.CSSProperties = {
    paddingLeft: 30,
    paddingTop: 20,
    border: '1px solid #d9d9d9',
    height: 500,
    overflow: 'auto'
}
   


async function getBase64(file: RcFile): Promise<string> {
   return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
}

const UploadImages: React.FC = () => {

    const [previewOpen, setPreviewOpen] = useState(false);

    const [previewImage, setPreviewImage] = useState('');

    const [previewTitle, setPreviewTitle] = useState('');

    const [images, setImages] = useState<Images[]>(new Array<Images>());

    const [fileList, setFileList] = useState<UploadFile[]>(new Array<UploadFile>());

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {

        file.preview = await getBase64(file.originFileObj as RcFile);
        

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {

        if (!images.some(item => item.name === newFileList[newFileList.length - 1].name as string))
        {
            images.push({
                name: newFileList[newFileList.length - 1].name as string,
                bytes: await getBase64(newFileList[newFileList.length - 1].originFileObj as RcFile),
            })
        }

        console.log(images);
            
        newFileList.forEach((value: UploadFile<any>, index: number, arr: UploadFile<any>[]) => {
            value.status = 'done';
            return value;
        });

        setFileList(newFileList);
    }

        

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <>

            <div style={colStyle} >
                <Upload
                    //action="http://localhost:5000/test-pic"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 20 ? null : uploadButton}
                </Upload>

                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>


               
            </div>

            <div style={{ padding: 20, textAlign: 'center' }}>
                <Button
                    type="primary"
                    shape="round"
                    icon={<UploadOutlined />}
                    size={'large'}>
                    Upload
                </Button>
            </div>
        </>
    );
};

export default UploadImages;

//<>

//</>