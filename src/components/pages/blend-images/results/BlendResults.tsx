import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Image } from 'antd';


const colStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 30,
    paddingTop: 20,
    border: '1px solid #d9d9d9',
    height: 500,
    overflow: 'auto',
    textAlign: 'center'
    
}


const BlendResults: React.FC = () => {


    return (
        <div>
            <div style={colStyle}>
                <Image
                    
                    width={500}
                    src="https://w-dog.ru/wallpapers/1/12/443673032936544/chelovek-pauk-tobi-magvajera.jpg"
                />
                <div style={{ marginTop: 10 }}> </div>

                <Image
                    width={500}
                    src="https://www.desktopbackground.org/download/1024x768/2015/05/13/947681_spiderman-in-action-widescreen-wallpapers_2560x1600_h.jpg"
                />
            </div>
                    <div style={{ padding: 20, textAlign: 'center' }}>
                <Button
                    type="primary"
                    shape="round"
                    icon={<DownloadOutlined />}
                    size={'large'}>
                    Upload
                </Button>
            </div>
        </div>
        
        



    );
};

export default BlendResults;