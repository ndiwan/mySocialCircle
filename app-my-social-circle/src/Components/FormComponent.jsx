import NavComponent from "./NavComponent"
import {useState} from 'react';
import ButtonComponent from './ButtonComponent'
import PropTypes from 'prop-types'

import {v4 as uuid} from 'uuid'



const FormComponent = ({setContacts}) => {

  const [formData, setFormData]= useState({ name:"", phone:"", address:"", note:"" , id: ""});

  //console.log(formData);


  const handleChange=(e) =>{
    setFormData(prevState =>({ ...prevState, id: uuid(), [e.target.name]: e.target.value }));
 console.log("form data handle change...", formData)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
  
   setContacts(prev=>[ formData , ...prev,])
   setFormData({ name:"", phone:"", address:"", note:"", id:"" });
  }
 
  const handleClear=()=>{
    console.log("handleClear called")
    setFormData({ name:"", phone:"", address:"", note:"", id:"" });
  } 

  return (
    <div className="appContainer">
    <NavComponent />



     <form onSubmit={handleSubmit}>

    <label htmlFor="name" ></label>   
<input name="name" type="text" id="name" placeholder="name" value={formData.name} onChange={handleChange} />
 <br />

 <label htmlFor="phone"></label>
 <input name="phone" type="tel" id="phone" placeholder="phone" value={formData.phone} onChange={handleChange}/>
 <br />

 <label htmlFor="address"></label>
 <input name="address" type="text" id="address" placeholder="address" value={formData.address} onChange={handleChange}/>
 <br />

 <label htmlFor="note"></label>
 <textarea name="note" id="note" rows="4" placeholder="write a note..."value={formData.note} onChange={handleChange}></textarea>

 <ButtonComponent type="submit" onClick={handleSubmit}>Submit</ButtonComponent>
  <ButtonComponent type="button" onClick={handleClear}>Clear</ButtonComponent>  

 </form> 
  </div>
  )
}

FormComponent.propTypes = {
  setContacts: PropTypes.func.isRequired,

};

export default FormComponent
