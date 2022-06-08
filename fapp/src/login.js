import React, { useEffect, useState } from "react";
import { Modal, Input, Button, Form, Layout, Menu, Table } from 'antd';
import { BorderlessTableOutlined, TeamOutlined, UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';
import http from "./http";
const { Header, Content, Footer, Sider } = Layout;
function Login() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    


    const [users, setUsers] = useState([]);
    const fetchAllUsers = () =>{
        http.get('./api').then(res=>{
            setUsers(res.data);
            console.log(users)
        })
    };
    



    const [open, setOpen] = React.useState(false);

    const [showTable, setShowTable] = useState();

    

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
                            Dashboard
                        </Menu.Item>
                        <Menu.Item
                            icon={<TeamOutlined />}
                            onClick={dialogBoxOpen}
                        >
                            login
                        </Menu.Item>

                        <Menu.Item icon={<UserAddOutlined />}
                        onClick = {() => {
                        }}
                        >
                            Users
                        </Menu.Item>

                        <Menu.Item icon={<UserDeleteOutlined />}>
                            Remove User
                        </Menu.Item>
                    </Menu>

                    {/* <Button className='btn-user'
        icon={<UserOutlined />}
      >
        Users
      </Button>

      <Button className='btn-user'>
        Add User
      </Button> */}
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
                        hello word
                 
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

                {/* <Input
                    autoFocus
                    margin="dense"
                    name='username'
                    placeholder="Your name"
                    value={loginData.username}
                    type="username"
                    fullWidth
                    variant="standard"
                    // addonAfter="@gmail.com"
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    prefix={<UserOutlined />}
                /> */}
                {/* Password: 
                <Input.Password
                margin="dense"
                name="password"
                placeholder="Password"
                fullWidth
                required= {true}
                onChange={(e) => setLoginData({...loginData, password:e.target.value})}
                /> */}
                {/* <Form.Item
                label="Username"
                >
                    <Input
                        placeholder="Username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                        onChange={(e) => setLoginData({...loginData, username:e.target.value})}
                    />

                </Form.Item>
                <Form.Item
                    label="Password"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >                
                <Input.Password
                    placeholder="Password"
                    name="password"
                    onChange={(e) => setLoginData({...loginData, password:e.target.value})}
                />
</Form.Item>
<Button onClick={() => { clear(); dialogBoxClose() }}>Cancel</Button>
                <Button onClick={() => { setOpen(false); show(); clear() }} >Submit</Button> */}
            </Modal>
        </>
    )


}
export default Login;