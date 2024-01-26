import { rb } from "../Firebase";
import { getDatabase, ref, remove ,get} from "firebase/database";
import React, { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dbRef = ref(rb);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setAppointments(snapshot.val());
      } else {
        console.log("No data available");
      }
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    const db = getDatabase(rb);
    const appointmentRef = ref(db, `appointments/${id}`);
    remove(appointmentRef);
  }

  return (
    <div>
      <h1>Appointment List</h1>
      {appointments &&
        Object.entries(appointments).map(([key, value]) => (
          <div key={key}>
            <h2>{value.date}</h2>
            <p>{value.time}</p>
            <p>{value.reason}</p>
            <p>{value.status}</p>
          </div>
        ))}
      
        <Button variant="danger" onClick={() => handleDelete(appointments.id)}>Delete</Button>
   
    </div>
  );
}

export default AppointmentList;
