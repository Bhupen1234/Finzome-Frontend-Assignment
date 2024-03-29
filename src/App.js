
import './App.css';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';
import { useState } from 'react';

function App() {
  const [formDataList,setFormDataList] = useState([])

  const onFormSubmit =(data)=>{
     setFormDataList((prevDataList) => [...prevDataList, data])
  }


  return (
    <div className="App">
      <div className='finzome'>
          <h1>Finzome Technologies</h1>
      </div>
      <Form onFormSubmit={onFormSubmit}/>
      <Table formDataList={formDataList} setFormDataList={setFormDataList}/>
    </div>
  );
}

export default App;
