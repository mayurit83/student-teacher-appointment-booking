import React, { useState } from "react";
import { rb } from "../Firebase";
import {  ref, set } from "firebase/database";
import { Form, Button } from "react-bootstrap";
import './BookAppointment.css';

function BookAppointment() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        set(ref(rb, 'appointments/'), {
            name: name,
            department: department,
            subject: subject,
            date: date,
            status: "pending",
        });

        setName("");
        setDepartment("");
        setSubject("");
        setDate("");
    };

    return (
        <div style={{ marginTop: 250 }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Name </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label >Department </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    </Form.Group>
                <Button  type="submit">Schedule Appointment</Button>
                    </Form>
                    </div>
    )
}
export default BookAppointment;

