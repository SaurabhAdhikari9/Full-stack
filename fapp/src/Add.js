import React from 'react'
import { Form, Input, Button, Modal} from 'antd';
function Add() {
  return (
    <div>
      <Form>

        <Form.Item
        label="Title:"
        >
          <Input
          placeholder='Title'/>
        </Form.Item>

        <Form.Item
        label="Description:"
        >
          <Input
          placeholder='Description'/>
        </Form.Item>

        <Form.Item
        label="Catagory:"
        >
          <Input
          placeholder='Category'/>
        </Form.Item>

        <Form.Item
        label="Author:"
        >
          <Input
          placeholder='Author'/>
        </Form.Item>

        <Form.Item
        label="Signees:"
        >
          <Input
          placeholder='Signees'/>
        </Form.Item>


      </Form>
    </div>
  )
}

export default Add