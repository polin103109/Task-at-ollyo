import React from 'react'

function ThirdStep() {
  return (
    <>
    <div>
      <h3>Registration Form</h3>
      <span>Please fill out this form with the required information</span>
      <br />
      <label>
        <b>Company Name</b>
      </label>
      <input type="text" placeholder="Enter Company Name" required />

      <label htmlFor="fos">
        <b>Position Held</b>
      </label>
      <input type="text" id="fos" placeholder="Enter Position" required />

      <label htmlFor="institution">
        <b>Employment Duration</b>
      </label>
      <input type="text" id="institution" placeholder="Enter Employment Duration" required />

      <label htmlFor="gradYear">
        <b>Description</b>
      </label>
      <input type="text" id="gradYear" placeholder="Enter Description" required />
   
    </div>
  </>
  );
}

export default ThirdStep
