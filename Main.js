import { rb} from "../Firebase";
import {  ref, push } from "firebase/database";
import React, {  useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./Main.css"; // Import custom styles


function Main() {
  const [name , setName] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
 // const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    push(ref(rb, 'teachers/'), {
      name: name,
      department: department,
      subject: subject,
    });
    setName("");
    setDepartment("");
    setSubject("");
  }

  return (
    <div style={{marginTop : 250}}>
      <h1>Add</h1>
      <Card>
        <Card.Body>
          <center>
            <Form>
              <Form.Group controlId="formBasicName" className="form-group" >
                <Form.Label >Name</Form.Label>
                <Form.Control  type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formBasicDepartment" className="form-group">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="Enter department" value={department} onChange={(e) => setDepartment(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formBasicSubject" className="form-group">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Upload
              </Button>
            </Form>
          </center>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Main;
