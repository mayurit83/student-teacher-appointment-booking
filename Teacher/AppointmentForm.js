import React, { useState } from 'react';
import { rb } from '../Firebase';
import {  ref, push } from "firebase/database";

const AppointmentForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    push(ref(rb, 'appointments/'), {
      date: date,
      time: time,
      reason: reason,
      status: 'Pending',
    });
      setDate('');
      setTime('');
      setReason('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label style={{margin:'10px'}}>
        Date:
        <input style={{marginLeft:"10px"}} type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label style={{margin:'10px'}}>
        Time:
        <input style={{marginLeft:"10px"}} type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <label style={{margin:'10px'}}>
        Reason for appointment:
        <textarea style={{marginLeft:"10px"}} value={reason} onChange={(e) => setReason(e.target.value)} required />
      </label>
      <button style={{margin:'10px'}} type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;
