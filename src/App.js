import { useState } from "react";
import First from "./components/First";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import "./App.css";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    hobbies: "",
    images: [],
  });
  const [page, setPage] = useState(0);
  function handleSubmit() {
    setPage(page + 1);
  }
  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <First formData={formData} setFormData={setFormData} />;
      case 1:
        return <SecondStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <ThirdStep formData={formData} setFormData={setFormData} />;
      default:
        return <First />;
    }
  };

  return (
    <>
      {conditionalComponent()}
      <div className="buttondivvv">
        {page > 0 && (
          <button onClick={() => setPage(page - 1)}>Previous</button>
        )}
        <button onClick={handleSubmit}>
          {page === 0 || page === 1 ? "Next" : "Submit"}
        </button>
      </div>
    </>
  );
}
