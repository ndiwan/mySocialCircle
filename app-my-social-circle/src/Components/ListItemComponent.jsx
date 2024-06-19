import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const ListItemComponent = ({contact}) => {
 

  return (
    <Link to={`/contact-detail/${contact.id}`}>
    <p>Name: {contact.name}</p>
    <p>Phone: {contact.phone}</p>
    <p>Address: {contact.address}</p>
    <p>Additional information: {contact.note}</p>
  </Link>

   /*  <div>
    <p>Name: {contact.name}</p>
    <p>Phone: {contact.phone}</p>
    <p>Address: {contact.address}</p>
    <p>Additional information: {contact.note}</p>
  </div> */
  )
}
ListItemComponent.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ListItemComponent
