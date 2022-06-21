import React, { useState, useEffect } from 'react'
import { Table, Popconfirm, Button, message, Modal, Input, Form } from 'antd';
import 'antd/dist/antd.css';
import HTTP from './http'
import axios from 'axios';
function Schedule() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  //fetch all data (initial fetch)
  const retriveData = async () => {
    setLoading(true);
    const fetchData = await HTTP.get('/schedules/');
    setData(fetchData.data.data);
    setLoading(false);
  };

  // delete value from table
  const handleDelete = async (value) => {
    const response = await HTTP.delete(`/schedules/${value.id}`);
    if (response) {
      message.info("deleted!!!");
    }
    else {
      message.error("failed!!");
    }
    retriveData();
  }
  const [visible, setVisible] = useState(false);


  const [rowId, setRowID] = useState("");
  const [rowTitle, setRowTitle] = useState("");
  const [rowDescription, setRowDescription] = useState("");
  const [rowPresent, setRowPresent] = useState();
  const [rowEventDate, setRowEventDate] = useState();


  const [dataId, setDataId] = useState();
  const handleUpdate = async (value) => {
    setDataId(value.id);
    axios.get(`http://127.0.0.1:8000/api/schedules/${value.id}`)
    .then( res => {
      if(res){
        const fetchData = res.data.data;
        setRowID(fetchData.event_id);
        setRowTitle(fetchData.title);
        setRowDescription(fetchData.description);
        setRowPresent(fetchData.present);
        setRowEventDate(fetchData.event_date);
        setVisible(true);
      }
    })
  

}
const updateDatabase = () => {
  const editData = {
    event_id: rowId,
    title: rowTitle,
    present: rowPresent,
    description: rowDescription,
    event_date: rowEventDate
  }

  console.log(editData)
  axios.put(`http://127.0.0.1:8000/api/schedules/${dataId}`, editData)
    .then((res) => {
      setLoading(true);
      retriveData();
      setVisible(false);
      setLoading(false);
    }).catch((error) => {
      console.log(error)
    })

}
  const columns = [
    {
      title: 'Event ID',
      dataIndex: 'event_id',
      key: 'event_id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Present',
      dataIndex: 'present',
      key: 'present',
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: "Event Date",
      dataIndex: 'event_date',
      key: 'event_date',
    }, {
      title: 'Action',
      dataIndex: 'action',
      align: 'center',
      render:(_, record) =>
        data.length >= 1 ? (
          <>
            <Popconfirm title="Do you want to delete? " onConfirm={() => {handleDelete(record); }}>
              <Button danger type='primary'>
                Delete
              </Button>
            </Popconfirm>

            <Popconfirm
              title="Do you want to edit data?"
              onConfirm={() => {handleUpdate(record)}}
            >
              <Button type='primary'
              onClick={() => console.log("Edit")}
               >
                edit
              </Button>
            </Popconfirm>
          </>
        ) : null
    },
  ];
  const show = () =>{
    // console.log(editData);
  }

  useEffect(() => {
    retriveData();
  }, []);

  return (
    <div>
      <Table
        dataSource={data}
        columns={columns}
        loading={loading}
        />
      <Modal
      title="Edit form"
      visible={visible}
      onCancel= {() => {setVisible(false);}}
      footer={null}
      >
  <Form>
          <Form.Item
            label="ID:"
          >
            <input
              value={rowId}
              onChange={(e) => setRowID(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Title:"
          >
            <input
              value={rowTitle}
              onChange={(e) => setRowTitle(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Present:"
          >
            <input
              value={rowPresent}
              onChange={(e) => setRowPresent(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Description:"
          >
            <input
              value={rowDescription}
              onChange={(e) => setRowDescription(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Event Date:"
          >
            <input
              value={rowEventDate}
              onChange={(e) => setRowEventDate(e.target.value)}
            />
          </Form.Item>
          <Button danger type='primary'>Cancel</Button>
          <Button type='primary' onClick={() => updateDatabase()} >Update</Button>
        </Form>


      </Modal>
    </div>
  )
}

export default Schedule