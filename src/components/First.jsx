import { useState } from "react";
import { ImageIcon } from "../Icons";
import "../styles/firstform.css";
function First({ formData, setFormData }) {
  const [hobbies, setHobbies] = useState(formData.hobbies || [""]);
  const [images, setImages] = useState(formData.images || []);
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
    setFormData({
      ...formData,
      hobbies: newHobbies,
    });
  }

  function handleImageChange(e) {
    const fileList = e.target.files;
    const imagesArray = Array.from(fileList);

    const imageUrls = imagesArray.map((image) => URL.createObjectURL(image));

    const updatedImages = [...images, ...imageUrls];

    setImages(updatedImages);

    setFormData({
      ...formData,
      images: updatedImages,
    });
  }

  return (
    <div>
      <h3>Registration Form</h3>
      <span>Please fill out this form with the required information</span>
      <br />
      <label>
        <b>Name</b>
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
        <b>Email</b>
        <input
          type="email"
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
          placeholder="example@gmail.com"
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
        <b>Phone Number</b>
        <input
          type="text"
          onChange={(e) => {
            setFormData({
              ...formData,
              phonenumber: e.target.value,
            });
          }}
          value={formData.phonenumber}
          placeholder="+880"
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
        <b>Address</b>
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
        <b> Hobbies</b>
        {hobbies.map((hobby, index) => (
          <div key={index}>
            <label>
              <input
                type="text"
                onChange={(e) => handleChangeHobby(e, index)}
                value={hobby}
                id={`userHobbies_${index}`}
                required
              />
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
      <b>Image</b>
      <div className="upload-image">
        {formData.images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt="" />
          </div>
        ))}
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
