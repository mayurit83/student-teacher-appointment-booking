import React, { useState } from "react";
import { rb } from "../Firebase";
import { set, ref } from "firebase/database";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './EditComponent.css';

function EditComponent({ id, name, department, subject, onHide }) {
  const [editedName, setEditedName] = useState(name);
  const [editedDepartment, setEditedDepartment] = useState(department);
  const [editedSubject, setEditedSubject] = useState(subject);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setEditedDepartment(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setEditedSubject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    set(ref(rb, `teachers/${id}`), {
      name: editedName,
      department: editedDepartment,
      subject: editedSubject,
    }).then(() => onHide());
  };

  return (
    <div>
    <h1>Update</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="form-group">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={editedName}
          onChange={handleNameChange}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter department"
          value={editedDepartment}
          onChange={handleDepartmentChange}
        />
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subject"
          value={editedSubject}
          onChange={handleSubjectChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
    </div>
  );
}

export default EditComponent;
