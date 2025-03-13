import React from "react";

const UserCancellation = () => {
  return (
    <>
      <p><strong>Cancel or reschedule a Teache Class</strong></p>
      <p style={{marginBottom: 10}}>Have your plans changed? Our standard cancellation policies are:</p>
      <ul>
        <li>Full refund for any class if you cancel at least seven (7) days before the class starts.</li>
        <li>For classes cancelled within 60 min of the class start time, no refund will be provided.</li>
      </ul>
      <p>If you cancel within seven (7) days of the start of the class, your cancellation will be subject to the Instructor’s cancellation policies.</p>
    </>
  );
};

export default UserCancellation;
