import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const EditModal = ({open,setOpen,id, rowData,handleSaveEditedRow}) => {
    const [editedData,setEditedData] = useState(rowData);


    

    const handleInputChange = (e) => {
        let { name, value, type, checked } = e.target;
        setEditedData((prevState) => {
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

  const handleSubmit =(e)=>{
    e.preventDefault();
    handleSaveEditedRow(id,editedData)
    setOpen(false)
  }

  const onCloseModal = () => setOpen(false);

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div>
     <Modal open={open} onClose={onCloseModal} center>
     <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={editedData.name}
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
            value={editedData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Contact :
          <input
            type="tel"
            name="contact"
            value={editedData.contact}
            onChange={handleInputChange}
            pattern="[0-9]{10}"
            title="Please enter a 10-digit contact number"
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
            checked={editedData.weekDay.includes("Monday")}
            onChange={handleInputChange}
           
            />
            Monday
          </label>
          <label>
            <input
              type="checkbox"
              name="weekday"
              value={"Tuesday"}
              onChange={handleInputChange}
              checked={editedData.weekDay.includes("Tuesday")}
            />
            Tuesday
          </label>
          <label>
            <input
              type="checkbox"
              name="weekday"
              value={"Wednesday"}
              onChange={handleInputChange}
              checked={editedData.weekDay.includes("Wednesday")}
            />
            Wednesday
          </label>
          <label>
            <input
              type="checkbox"
              name="weekday"
              value={"Thursday"}
              onChange={handleInputChange}
              checked={editedData.weekDay.includes("Thursday")}
              
            />
            Thursday
          </label>
          <label>
            <input
              type="checkbox"
              name="weekday"
              value={"Friday"}
              onChange={handleInputChange}
              checked={editedData.weekDay.includes("Friday")}
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
              checked={editedData.gender === "Male"}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={editedData.gender === "Female"}
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
            value={editedData.dob}
            onChange={handleInputChange}
            max={getCurrentDate()}
            required
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
      </Modal>
    </div>
  )
}

export default EditModal;
