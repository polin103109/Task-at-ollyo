import React from "react";
import "../styles/secondform.css";
import "../styles/firstform.css";
function SecondStep({ formData, setFormData }) {
  return (
    <>
      <div>
        <h3>Registration Form</h3>
        <span>Please fill out this form with the required information</span>
        <br />
        <label>
          <b>Highest Degree</b>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              degree: e.target.value,
            });
          }}
          value={formData.degree}
          placeholder="Enter Degree"
          required
        />

        <label htmlFor="fos">
          <b>Field of Study</b>
        </label>
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              FOS: e.target.value,
            });
          }}
          value={formData.FOS}
          id="fos"
          placeholder="Enter FOS"
          required
        />

        <label htmlFor="institution">
          <b>Institution Name</b>
        </label>
        <input
          type="text"
          id="institution"
          onChange={(e) => {
            setFormData({
              ...formData,
              institution: e.target.value,
            });
          }}
          value={formData.institution}
          placeholder="Institution"
          required
        />

        <label htmlFor="gradYear">
          <b>Graduation Year</b>
        </label>
        <input
          type="text"
          id="gradYear"
          onChange={(e) => {
            setFormData({
              ...formData,
              graduation: e.target.value,
            });
          }}
          value={formData.graduation}
          placeholder="Graduation Year"
          required
        />
      </div>
    </>
  );
}

export default SecondStep;
