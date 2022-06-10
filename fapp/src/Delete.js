import React, { useState } from 'react'
import { Form, Input, Button, Modal} from 'antd';
import http from './http';
function Delete() {
  const [deleteID, setDeleteID] = useState();

  const deleteData = async () =>{
    await http.delete(`/api/${deleteID}`)
  };
  return (
    <div>

      <Form>
        <Form.Item
        label="ID"
        >
          <Input
          placeholder='ID'
          onChange={(e) => setDeleteID(e.target.value)}          
          />
        </Form.Item>
        <Button>Cancel</Button>
        <Button onClick={deleteData()}>Delete</Button>
      </Form>
    </div>
  )
}

export default Delete