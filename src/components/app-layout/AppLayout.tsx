import React, { ReactNode, useEffect } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;



const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);


const items3: MenuProps['items'] = [
    {
        key: `blend`,
        icon: React.createElement(UserOutlined),
        label: <Link to="/g"> Blend Images </Link> 
    },
    {
        key: `prompt`,
        icon: React.createElement(LaptopOutlined),
        label: `Prompt`,
    }
]

interface LayoutComponentProps
{
    content: ReactNode;
    children: ReactNode;
}


const AppLayout: React.FC<LayoutComponentProps> = ({ content, children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useEffect(() => {
        document.title = 'Ringfence'; // Установка нового названия страницы
    }, []);

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ color: 'white' }} > Ringfence </div>
                <div className="demo-logo" />

            </Header>
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer, padding: 20 }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items3}
                    />
                </Sider>

                <Layout style={{ padding: '0 24px 24px', minHeight: '100hv' }}>

                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>

                    <Content
                        style={{
                            padding: 20,
                            margin: 5,
                            minHeight: '78vh',
                            background: colorBgContainer,

                            //paddingRight: 100
                        }}
                    >
                        {content}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default AppLayout;