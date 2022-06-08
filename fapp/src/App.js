import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';
export default function App(){
  return (
    <div className='main'>
      <div className='container'>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        // onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
              // onChange={(e) => setUserName(e.target.value)}
            />

          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" 
            // onClick={submitHandler}
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
          
          {/* <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item> */}
        </Form>
      </div>
      <div>
      {/* <DepoData/> */}
      {/* <Button onClick = {display}>
        Deposite
      </Button> */}
      {/* <DepoPage/> */}
      {/* <DepoPage/> */}
      </div>
    </div>
  );
}
 