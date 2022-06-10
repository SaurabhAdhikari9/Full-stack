import React, { useState } from 'react'
import { Form, Input, Button} from 'antd';
import http from './http';
function Add() {
  const [data, setData] = useState({
    title:'',
    description:'',
    category:'',
    author:'',
    signees:''
  });

  const show  = () => {
    console.log(data.title);
    console.log(data.description);
    console.log(data.author);
    console.log(data.category);
    console.log(data.signees);
  };

  const addData = async () =>{
    const reponse = await http.post("/api", data);
  };
  return (
    <div>
      <Form>

        <Form.Item
        label="Title:"
        >
          <Input
          placeholder='Title'
          onChange={(e) => setData({...data, title:e.target.value})}
          />
        </Form.Item>

        <Form.Item
        label="Description:"
        >
          <Input
          placeholder='Description'
          onChange={(e) => setData({...data,description:e.target.value})}
          />
        </Form.Item>

        <Form.Item
        label="Catagory:"
        >
          <Input
          placeholder='Category'
          onChange={ (e) => setData({...data, category:e.target.value})}
          /> 
        </Form.Item>

        <Form.Item
        label="Author:"
        >
          <Input
          placeholder='Author'
          onChange={ (e) => setData({...data, author:e.target.value})}
          />
        </Form.Item>

        <Form.Item
        label="Signees:"
        >
          <Input
          placeholder='Signees'
          onChange={ (e) => setData({...data, signees:e.target.value})}
          />
        </Form.Item>
        <Button onClick={() => {addData(); show();}}>Add</Button>
        <Button>Cancel</Button>

      </Form>
    </div>
  )
}

export default Add