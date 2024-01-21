import React, { useEffect, useState } from "react";
import style from "./Form.module.css";
const Form = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    weekDay: [],
    gender: "Male",
    dob: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);

    setFormData({
      name: "",
      email: "",
      contact: "",
      weekDay: [],
      gender: "Male",
      dob: "",
    });
  };



    const handleInputChange = (e) => {
      let { name, value, type, checked } = e.target;
    
      setFormData((prevState) => {
        if (type === "checkbox") {
          const updatedWeekDays = checked
            ? [...prevState.weekDay, value]
            : prevState.weekDay.filter((day) => day !== value);
    
          return {
            ...prevState,
            weekDay: updatedWeekDays,
          };
        }
    
        return {
          ...prevState,
          [name]: type === "radio" ? value : value,
        };
      });
    };
    

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Contact :
          <input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          WeekDay (Monday to Friday):
          <label>
            <input
              type="checkbox"
              name="weekday"
              value={"Monday"}
              onChange={handleInputChange}
              checked={formData.weekDay.includes("Monday")}
            />
            Monday
          </label>
          <label>
            <input
              type="checkbox"
              name="weekday"
              value={"Tuesday"}
              onChange={handleInputChange}
              checked={formData.weekDay.includes("Tuesday")}
            />
            Tuesday
          </label>
          <label>
            <input
              type="checkbox"
              name="weekday"
              value={"Wednesday"}
              onChange={handleInputChange}
              checked={formData.weekDay.includes("Wednesday")}
            />
            Wednesday
          </label>
          <label>
            <input
              type="checkbox"
              name="weekday"
              value={"Thursday"}
              onChange={handleInputChange}
              checked={formData.weekDay.includes("Thursday")}
            />
            Thursday
          </label>
          <label>
            <input
              type="checkbox"
              name="weekday"
              value={"Friday"}
              onChange={handleInputChange}
              checked={formData.weekDay.includes("Friday")}
            />
            Friday
          </label>
        </label>
        <br />
        <label>
          Gender :
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
            />
            Female
          </label>
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
