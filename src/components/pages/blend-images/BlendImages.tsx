import React from 'react';
import { Col, Row, Typography } from 'antd';
import UploadImages from './upload-images/UploadImages';
import BlendResults from './results/BlendResults';


const { Text } = Typography;

const BlendImages: React.FC = () => {

    return (
        <>
            <Row style={{ paddingTop: 60 }}>

                <Col xs={{ span: 1, offset: 1 }} lg={{ span: 10, offset: 1 }}>

                    <div style={{ marginBottom: 20, textAlign: 'center' }}>
                        <Text >Upload Images</Text>
                    </div>


                    <UploadImages/>

                </Col>

                <Col xs={{ span: 1, offset: 1 }} lg={{ span: 10, offset: 2 }}>
                    <div style={{ marginBottom: 20, textAlign: 'center' }}>
                        <Text >Results</Text>
                    </div>

                    <BlendResults />
                </Col>

            </Row>
        </>
    );
}

export default BlendImages;

