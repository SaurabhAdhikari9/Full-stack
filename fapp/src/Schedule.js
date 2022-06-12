import React, {useState, useEffect} from 'react'
import {Table, Popconfirm, Button, message } from 'antd';
import 'antd/dist/antd.css';
import HTTP from './http'
function Schedule() {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const retriveData = async () => {
      setLoading(true);
        const fetchData = await HTTP.get('/schedules/');
        setData(fetchData.data.data);
        setLoading(false);
    };

  
    const handleDelete = async (value) => {
      const response = await HTTP.delete(`/schedules/${value.id}`);
      if(response){
        message.error("deleted!!!");
      }
      else{
        message.error("failed!!");
      }
      retriveData();
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: 'event_id',
            key: 'event_id',
          }, {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title:'Present',
            dataIndex:'present',
            key:'present',
          },{
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title:"Event Date",
            dataIndex:'event_date',
            key:'event_date',
          },{
            title:'Action',
            dataIndex:'action',
            align:'center',
            render: (_, record) => 
            data.length >= 1 ? (
              <>
              <Popconfirm title="Do you want to delete? " onConfirm={ () => handleDelete(record)}>
                <Button danger type='primary'>
                Delete
                </Button>
              </Popconfirm>
                <Button>
                  edit
                </Button>
              </>

            ) : null
          },
    ];

    useEffect(() => {
        retriveData();
    },[]);
  return (
    <div>
        <Table 
        dataSource={data} 
        columns={columns}
        loading={loading}
        />
    </div>
  )
}

export default Schedule