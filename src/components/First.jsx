import { useState } from "react";
import { ImageIcon } from "../Icons";
import "../styles/firstform.css";
function First({ formData, setFormData }) {
  const [hobbies, setHobbies] = useState([""]);
  const [images, setImages] = useState([""]);
  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isPhoneNumberValid = (phoneNumber) => {
    return /^(?:\+88|01)?\d{11}\r?$/.test(phoneNumber);
  };
  function handleHobbies(action) {
    if (action === "add" && hobbies.length < 5) {
      setHobbies([...hobbies, ""]);
    } else if (action === "remove") {
      if (hobbies.length > 1) {
        const newHobbies = hobbies.slice(0, hobbies.length - 1);
        setHobbies(newHobbies);
      }
    }
  }
  function handleChangeHobby(e, index) {
    const newHobbies = [...hobbies];
    newHobbies[index] = e.target.value;
    setHobbies(newHobbies);
  }
  function handleImageChange(e) {
    const fileList = e.target.files;
    const imagesArray = Array.from(fileList);

    setImages([...images, ...imagesArray]);

    const imageUrls = imagesArray.map((image) => URL.createObjectURL(image));
    setFormData({
      ...formData,
      images: [...formData.images, ...imageUrls],
    });
  }

  return (
    <div>
      <h3>Registration Form</h3>
      <span>Please fill out this form with the required information</span>
      <br />
      <label>
        Name
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
          value={formData.name}
          placeholder="John Doe"
          required
        />
      </label>
      <label for="Email">
        Email{" "}
        <input
          type="email"
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
          value={formData.email}
          id="userEmail"
          required
        ></input>
        {formData.email && !isEmailValid(formData.email) && (
          <span style={{ color: "red" }}>Invalid email</span>
        )}
        <br />
      </label>
      <label for="Phone">
        Phone Number
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              phonenumber: e.target.value,
            });
          }}
          value={formData.phonenumber}
          id="userAddress"
          required
        ></input>
        {formData.phonenumber && !isPhoneNumberValid(formData.phonenumber) && (
          <span style={{ color: "red" }}>Invalid Phone No</span>
        )}
        <br />
      </label>
      <br />
      <label for="Address">
        Address
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              address: e.target.value,
            });
          }}
          value={formData.address}
          id="userHobbies"
          required
        ></input>{" "}
        <br />
      </label>
      <br />
      <label>
        Hobbies
        {hobbies.map((hobby, index) => (
          <div key={index}>
            <label>
              <input onChange={handleChangeHobby} id="userHobbies" required />
            </label>
          </div>
        ))}
        <div className="hobbyButton">
          <button
            onClick={() => handleHobbies("add")}
            className="hobbiesButton"
          >
            +
          </button>
          <button
            onClick={() => handleHobbies("remove")}
            className="hobbiesButton"
          >
            -
          </button>
        </div>
      </label>
      <br />
      <br />
      <span>Image</span>
      <div className="upload-image">
        <label>
          <ImageIcon />
          <br />
          <span className="add-image"> Upload</span>

          <input
            onChange={handleImageChange}
            className="custom-input hidden"
            type="file"
            name="images"
            multiple
            accept="image/png, image/jpeg, image/webp"
          />
        </label>
      </div>
      <br />
    </div>
  );
}
export default First;
