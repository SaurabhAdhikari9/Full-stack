import React, {useState, useEffect} from 'react'
import {Table, Popconfirm, Button } from 'antd';
import 'antd/dist/antd.css';
import HTTP from './http'
function Schedule() {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const retriveData = async () => {
      setLoading(true);
        const fetchData = await HTTP.get('/schedules/');
        // const dataJson = await fetchData.json();
        setData(fetchData.data.data);
        setLoading(false);
        // console.log(fetchData.data.data);  
    };
    const handleDelete = (value) => {
      const dataSource = [...data];
      const filterData = dataSource.filter((item ) => item.id !== value.id);
      const id = value.id;
      setData(filterData);
      console.log(id);
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