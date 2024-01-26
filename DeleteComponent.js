import React from "react";
import { rb } from "../Firebase";
import { remove, ref } from "firebase/database";
import Button from 'react-bootstrap/Button';

function DeleteComponent({ id, onHide }) {
  const handleDelete = () => {
    remove(ref(rb, `teachers/${id}`)).then(() => onHide());
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteComponent;
