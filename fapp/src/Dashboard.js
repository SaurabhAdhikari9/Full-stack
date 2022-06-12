import React, {useEffect, useState} from 'react';
import {Button, Table } from 'antd';
import 'antd/dist/antd.css';
export default function Dashboard(){
  
  const [users, setUsers] = useState();

  

  const getUsers =async ()=> {
    const res = await fetch('http://127.0.0.1:8000/api/api');
     let data =  await res.json();
     setUsers(data.data);

    }
  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
  
    {
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
    <Table dataSource={users} columns={columns}
      
    />
    </>


  )
}