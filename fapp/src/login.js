import React, { useState } from "react";
import { Modal, Input, Button, Form, Layout, Menu, Table } from 'antd';
import { BorderlessTableOutlined, TeamOutlined, UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Dashboard from './Dashboard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function Login() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const [open, setOpen] = React.useState(false);
    const dialogBoxOpen = () => {
        setOpen(true);
        console.log('dailogBoxOpen: ' + open)
    };

    const dialogBoxClose = () => {
        setOpen(false);
    };

    const show = () => {
        console.log(loginData.username)
        console.log(loginData.password)
    };

    const clear = (e) => setLoginData({
        username: '',
        password: ''

    });



    return (
        <>
            <Layout>
                <Sider
                    className='sider'
                    style={{
                        textAlign: 'center',
                        paddingTop: '.5%',
                    }}
                >
                    <Menu style={{
                        backgroundColor: 'transparent',
                        color: 'white'
                    }}>
                        <Menu.Item icon={<BorderlessTableOutlined />
                        }>
                            <>
                            <Link to="./Dashboard">Dashboard</Link>
                                Dashboard
                            </>

                        </Menu.Item>
                        <Menu.Item
                            icon={<TeamOutlined />}
                            onClick={dialogBoxOpen}
                        >
                            
                        </Menu.Item>

                        <Menu.Item icon={<UserAddOutlined />}
                            onClick={() => {
                            }}
                        >
                            Users
                        </Menu.Item>

                        <Menu.Item icon={<UserDeleteOutlined />}>
                            Remove User
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        className="site-layout-sub-header-background"
                        style={{
                            padding: 0,
                        }}
                    />
                    <Content
                        style={{
                            margin: '24px 16px 0',
                        }}
                    >
                        <Dashboard />
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >

                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Test ©2022 Created by Saurabh Adhikari
                    </Footer>
                </Layout>
            </Layout>
            <Modal
                title="Login form"
                visible={open}
                onCancel={() => { setOpen(false); clear(); }}
                footer={null}
            >
            </Modal>
        </>
    )


}
export default Login;