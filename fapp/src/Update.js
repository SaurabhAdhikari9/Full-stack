import React, { useState } from 'react';
import { Form, Input, Button, Modal} from 'antd';
import 'antd/dist/antd.css';
import http from './http';
import Axios from 'axios';
function Update() {
  
  const [searchData, setSearchData] = useState();

  const search = async () => {
    let url = "http://127.0.0.1:8000/api/api/";
    let id = searchID;
    const res = await fetch(url.concat(id));
    let data = await res.json();
    setSearchData(data.data);
  }

  const [searchID, setSearchID] = useState(0);
  // console.log(searchID);
  const show = () => {
    console.log(searchID);
    console.log(searchData);
    console.log(searchData.id);
    console.log(searchData.title);
  }



// const id = searchData.id; 
  const [visible, setVisible] = useState(false);

  const dailogBoxOpen = () => {
    setVisible(true);
  };

  const dialogBoxClose = () => {
    setVisible(false);
  };

  const [updateData, setUpdateData] = useState({
    
    title:"",
    description:"",
    category:"",
    author:"",
    signees:""
  })
  const showUpdatedData = () =>{
    console.log(updateData.id);
    console.log(updateData.title);
    console.log(updateData.description);
    console.log(updateData.author);
    console.log(updateData.category);
    console.log(updateData.signees);
  }

  const updateDatabase = async () => {
    let url = "api/";
    let id = searchID;
    const responser = await http.put(url.concat(id) , updateData);
    


    
    // fetch(url.concat(id), {
    //   method: 'PUT',
    //   headers:{
    //     'Accept':'application/json',
    //     'Content':'application/json'
    //   },
    //   body:JSON.stringify(updateData)
    // })
  }
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="User ID"
          name="id"
          rules={[
            {
              required: true,
              message: 'Please input your ID',
            },
          ]}
        >
          <Input
            type={"number"}
            onChange={(e) => setSearchID(e.target.value)}
            onPressEnter={() => {
              search();
              show();
            }}
          />
          <Button
            onClick={() => { search(); show(); dailogBoxOpen(); }}
          >
            Search
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="Login form"
        visible={visible}
        onCancel={() => { dialogBoxClose(); }}
        footer={null}
      >
        <Form>
          <Form.Item
          label="ID"
     
          >
           <Input
           autoFocus
           margin="dense"
           type={"number"}
           placeholder="ID"
          variant="standard"
          // onChange={(e) => setUpdateData({...updateData, id:e.target.value})}
          //  defaultValue={id}
           />
          </Form.Item>


          <Form.Item
          label="Title: ">
            <Input
               autoFocus
               margin="dense"
               placeholder="Title"
              variant="standard"
              onChange={(e) => setUpdateData({...updateData, title:e.target.value})}
            />
          </Form.Item>
          
          <Form.Item
          label="Description: ">
            <Input
               autoFocus
               margin="dense"
               placeholder="Description"
              variant="standard"
              onChange={(e) => setUpdateData({...updateData, description:e.target.value})}
            />
          </Form.Item>

          <Form.Item
          label="Category ">
            <Input
               autoFocus
               margin="dense"
               placeholder="Category"
              variant="standard"
              onChange={(e) => setUpdateData({...updateData, category:e.target.value})}
            />
          </Form.Item>
          
          <Form.Item
          label="Author:">
            <Input
                 autoFocus
                 margin="dense"
                 placeholder="Author"
                variant="standard"
                onChange={(e) => setUpdateData({...updateData, author:e.target.value})}
            />
          </Form.Item>
          
          <Form.Item
          label="Signees: ">
            <Input
               autoFocus
               margin="dense"
               placeholder="Signees"
              variant="standard"
              onChange={(e) => setUpdateData({...updateData, signees:e.target.value})}
            />
          </Form.Item>
          <Button onClick={() => {showUpdatedData(); updateDatabase();dialogBoxClose();}}>Update</Button>
        </Form>
      </Modal>
    </div>
  )
}

export default Update