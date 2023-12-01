import React from "react";
import "../styles/secondform.css";
import "../styles/firstform.css";
function SecondStep() {
  return (
    <>
      <div>
        <h3>Registration Form</h3>
        <span>Please fill out this form with the required information</span>
        <br />
        <label>
          <b>Highest Degree</b>
        </label>
        <input type="text" placeholder="Enter Degree" required />

        <label htmlFor="fos">
          <b>Field of Study</b>
        </label>
        <input type="text" id="fos" placeholder="Enter FOS" required />

        <label htmlFor="institution">
          <b>Institution Name</b>
        </label>
        <input
          type="text"
          id="institution"
          placeholder="Institution"
          required
        />

        <label htmlFor="gradYear">
          <b>Graduation Year</b>
        </label>
        <input
          type="text"
          id="gradYear"
          placeholder="Graduation Year"
          required
        />
      </div>
    </>
  );
}

export default SecondStep;
