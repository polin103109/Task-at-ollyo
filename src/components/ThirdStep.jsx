import React from "react";
import "../styles/thirdform.css";
function ThirdStep({ formData, setFormData }) {
  return (
    <>
      <div>
        <h3>Registration Form</h3>
        <span>Please fill out this form with the required information</span>
        <br />
        <label>
          <b>Company Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Company Name"
          onChange={(e) => {
            setFormData({
              ...formData,
              company: e.target.value,
            });
          }}
          value={formData.company}
          required
        />

        <label htmlFor="fos">
          <b>Position Held</b>
        </label>
        <input
          type="text"
          id="fos"
          placeholder="Enter Position"
          onChange={(e) => {
            setFormData({
              ...formData,
              position: e.target.value,
            });
          }}
          value={formData.position}
          required
        />

        <label htmlFor="institution">
          <b>Employment Duration</b>
        </label>
        <input
          type="text"
          id="institution"
          onChange={(e) => {
            setFormData({
              ...formData,
              duration: e.target.value,
            });
          }}
          value={formData.duration}
          placeholder="Enter Employment Duration"
          required
        />

        <label htmlFor="gradYear">
          <b>Description</b>
        </label>
        <input
          type="text"
          id="desc"
          placeholder="Enter Description"
          required
          class="description-input"
        />
      </div>
    </>
  );
}

export default ThirdStep;
