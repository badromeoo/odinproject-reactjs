import "./App.css";
import React, { useState } from "react";
import Educations from "./components/Education";
import MyInfo from "./components/MyInfo";
import Experience from "./components/Experince";

function App() {
  const initialInfo = {
    name: "",
    email: "",
    phone: "",
  };


  const [myInfo, setMyInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log(formData);

  //listen event and put it on state formData
  function handleChangeMyInfo(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  //take from fromData and put it on myInfo by setMyInfo
  const handleSubmitMyInfo = () => {
    setMyInfo(formData);
    setFormData(initialInfo);
  };

  //myedycation
  const [myEducation, setMyEducation] = useState({
    school: "",
    major: "",
    date: "",
  });

  const [formDataEducation, setFormDataEducation] = useState({
    school: "",
    major: "",
    date: "",
  });

  function handleChangeMyEducation(event) {
    setFormDataEducation({
      ...formDataEducation,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmitMyEducation = () => {
    setMyEducation(formDataEducation);
  };
  console.log(myEducation);

  //experience

  const [myExperince, setMyExperince] = useState({
    company: "",
    position: "",
    dateStart: "",
    dateEnd: "",
  });

  const [formDataExperince, setFormDataExperince] = useState({
    company: "",
    position: "",
    dateStart: "",
    dateEnd: "",
  });

  function handleChangeMyExperince(event) {
    setFormDataExperince({
      ...formDataExperince,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmitMyExperince = () => {
    setMyExperince(formDataExperince);
  };
  console.log(myEducation);

  return (
    <>
      <MyInfo {...myInfo} />
      <Educations {...myEducation} />
      <Experience {...myExperince} />
      <div>
        <h3>Form myInfo</h3>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChangeMyInfo} /> <br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChangeMyInfo} />
        <br />
        <input type="text" name="phone" placeholder="Number" value={formData.phone} onChange={handleChangeMyInfo} />
        <br />
        <button onClick={handleSubmitMyInfo}>Submit</button>
      </div>
      <div>
        <h3>Form myEducation</h3>
        <input type="text" name="school" placeholder="school" onChange={handleChangeMyEducation} /> <br />
        <input type="email" name="major" placeholder="major" onChange={handleChangeMyEducation} />
        <br />
        <input type="date" name="date" placeholder="date" onChange={handleChangeMyEducation} />
        <br />
        <button onClick={handleSubmitMyEducation}>Submit</button>
      </div>

      <div>
        <h3>Form myExperince</h3>
        <input type="text" name="company" placeholder="Company" onChange={handleChangeMyExperince} /> <br />
        <input type="email" name="position" placeholder="Position" onChange={handleChangeMyExperince} />
        <br />
        <input type="date" name="dateStart" placeholder="Start Date" onChange={handleChangeMyExperince} />
        <br />
        <input type="date" name="dateEnd" placeholder="End Date" onChange={handleChangeMyExperince} /> <br />
        <button onClick={handleSubmitMyExperince}>Submit</button>
      </div>
    </>
  );
}

export default App;
