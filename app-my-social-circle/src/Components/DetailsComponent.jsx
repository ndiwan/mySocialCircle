import NavComponent from "./NavComponent"
import {useParams, Link, useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'
import { CiEdit } from "react-icons/ci"
import { TiDelete } from "react-icons/ti"


const DetailsComponent = ({contacts, setContacts}) => {
  const{id}= useParams();
  const navigate=useNavigate();

  const contact = contacts.find(contact => contact.id === id);
   if(!contact){
    return <div>Contact not found</div>
  } 

const handleDelete=()=>{
  console.log('delete');
  const newContacts= contacts.filter(contact => contact.id != id);
  setContacts(newContacts);
  navigate('/');
}

  return (
    <div className="appContainer">
    <NavComponent />

   <div className="flex appContainer">
    <Link to={`/contact-edit/${id}`} className='link linkBackground' ><CiEdit /></Link>
                                
    <button  onClick={handleDelete} className='delete'><TiDelete /></button>
    </div>

    <p>Name: {contact.name}</p>
    <p>Phone: {contact.phone}</p>
    <p>Address: {contact.address}</p>
    <p>Additional information: {contact.note}</p>
  </div>
  )
}

DetailsComponent.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
}; 
export default DetailsComponent
