import React from "react";
import "./WelcomePage.css"; // import the CSS file for styling

function WelcomePage() {
  return (
    <div className="welcome-page">
    <h1>Welcome to</h1>
      <h2>Student-Teacher Booking Appointment</h2>
      <p>
        This is an online search platform that connects a student with a
        qualified and expert teacher nearby for knowledge enhancement in a
        particular stream/area/subject. Through this, a
        student or parent can select a subject and search teacher nearby their
        location. This will show the availability of teachers and they can
        contact teachers via message or call and book a direct appointment based
        on the teacher’s availability, qualification, and fee. The parents and
        students can also post a requirement in the portal and the requirement
        will be sent to all the teachers available in this portal so
        that teachers can contact parents.
      </p>
    </div>
  );
}

export default WelcomePage;
