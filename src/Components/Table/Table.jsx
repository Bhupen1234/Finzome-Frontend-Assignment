import React, { useEffect, useState } from "react";
import style from "./Table.module.css";
import EditModal from "../EditModal/EditModal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const Table = ({ formDataList ,setFormDataList}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);

  const handleSaveEditedRow =(id,editedData)=>{
    setFormDataList((prevList)=> prevList.map((item,index)=>(index===id ? {...item,...editedData} : item) ))
  }


  const handleDeleteRow =(rowIndex)=>{
     let newData = formDataList.filter((ele,index)=> index!==rowIndex)

     setFormDataList(newData)
  }






  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Weekday</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
            {
              formDataList.map((row,index)=>(
                <tr key={index}>
       
        <td>{index + 1}</td>
     
        <td>{row.name}</td>
        <td>{row.contact}</td>
        <td>{row.email}</td>
        <td>{row.weekDay.join(',')}</td>
        <td>{row.gender}</td>
        <td>{row.dob}</td>
        <td>
         
         
          
          <i class="fa-solid fa-pen-to-square fa-lg" style={{color: "#007bff" ,margin:"6px",cursor:"pointer"}} onClick={()=> onOpenModal()}></i>

          <i class="fa-solid fa-trash fa-lg" style={{color: "#007bff", margin:"6px", cursor:"pointer"}}  onClick={()=> handleDeleteRow(index)}></i>
          <EditModal open={open} setOpen={setOpen}  id={index}  rowData ={row} setFormDataList={setFormDataList} handleSaveEditedRow={handleSaveEditedRow}/>
        </td>
      </tr>
              ))
            }  
        </tbody>
        </table>
    </div>
  );
};

export default Table;
