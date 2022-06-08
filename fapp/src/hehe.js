import React,{useState} from 'react';
import http from './http';
import {Button, Table } from 'antd';
import 'antd/dist/antd.css';
export default function Hehe(){
    const [users, setUsers] = useState([]);

    const fetchAllUsers = () => {
        http.get('/api').then(res=>{
            setUsers(res.data);
            console.log(users);
        })
    };


    const columns = [{
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      }, {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      }, {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
          {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },{
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'Signees',
        dataIndex: 'signees',
        key: 'signees',
      }
  ];
    return(
        <>
        <Button
        // onClick={fetchAllUsers()}
         >Button</Button>
        {/* <Table dataSource={users} columns={columns}/> */}
        
        </>
    )
}