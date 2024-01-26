import {  ref, get } from "firebase/database";
import { useState, useEffect } from "react";
import { rb } from "../Firebase";


function Get() {
  const [data, setData] = useState([]);

useEffect(() => {
  const getData = async () => {
    const dbRef = ref(rb);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setData(snapshot.val());
    } else {
      console.log("No data available");
    }
  };
  getData();
}, []);

return (
  <div>
    <h1>Teacher Data</h1>
    {data &&
      Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <p>{value.name}</p>
          <p>{value.department}</p>
          <p>{value.subject}</p>
        </div>
      ))}
  </div>
);
}

export default Get;
