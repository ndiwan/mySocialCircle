import NavComponent from "./NavComponent"
import { useState } from "react"
import { useParams, Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CiEdit } from "react-icons/ci"
import { TiDelete } from "react-icons/ti"

import ButtonComponent from "./ButtonComponent"

const EditComponent = ({ contacts, setContacts }) => {
  
  //const [formData, setFormData]= useState({ name:"", phone:"", address:"", note:"" , id: ""});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("contacts type of",typeof contacts)

 // const contactEdit= Object.values(contacts).find(contact => contact.id === id);
 const contactEdit= contacts.find(contact => contact.id === id);
  const[name, setName]= useState(contactEdit.name);
  const[phone, setPhone]= useState(contactEdit.phone);
  const[address, setAddress]= useState(contactEdit.address);
  const[note, setNote]= useState(contactEdit.note);


  const handleDelete = () => {
    console.log('delete');
    const newContacts = contacts.filter(contact => contact.id != id);
    setContacts(newContacts);
    navigate('/');
  }

  

  //console.log(formData);


/*   const handleChange=(e) =>{

    setContacts(prevState =>({ ...prevState, id: uuid(), [e.target.name]: e.target.value }));

  } */

  const handleSubmit=(e)=>{
    e.preventDefault();
  const contactEdited=  {...contactEdit, name, phone, address, note}
  
  const contactsEdited= contacts.map(item => {
    if(item.id == id){
      item= contactEdited;
    }
    return item;
  })

  setContacts(contactsEdited);

   navigate('/')
  
  }
 
  const handleClear=()=>{
    console.log("handleClear called")
    setContacts({ name:"", phone:"", address:"", note:"", id:"" });
  } 





  return (
    <div className="appContainer">
      <NavComponent />

      <div className="flex appContainer">
        <Link to={`/contact-edit/${id}`} className='link linkBackground' ><CiEdit /></Link>

        <button onClick={handleDelete} className='delete'><TiDelete /></button>
      </div>

       <div>
       <form onSubmit={handleSubmit}>

<label htmlFor="name" ></label>   
<input name="name" type="text" id="name" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)} />
<br />

<label htmlFor="phone"></label>
<input name="phone" type="tel" id="phone" placeholder="phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
<br />

<label htmlFor="address"></label>
<input name="address" type="text" id="address" placeholder="address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
<br />

<label htmlFor="note"></label>
<textarea name="note" id="note" rows="4" placeholder="write a note..."value={note} onChange={(e)=> setNote(e.target.value)}></textarea>

<ButtonComponent type="submit" onClick={handleSubmit}>Submit</ButtonComponent>
<ButtonComponent type="button" onClick={handleClear}>Clear</ButtonComponent>  

</form> 


      </div> 


    </div>
  )
}

EditComponent.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};
export default EditComponent
