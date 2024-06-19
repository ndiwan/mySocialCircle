import React ,{useState, useEffect }from 'react'
import NavComponent from "./NavComponent"
import PropTypes from 'prop-types'
import ListItemComponent from './ListItemComponent'

const MainPage = ({ contacts }) => {
const[searchText, setSearchText]= useState('')
const [filteredContacts, setFilteredContacts]= useState(contacts)

const handleSearch= () =>{
  setFilteredContacts(contacts.filter(contact => {
    if(contact.name.toLowerCase().match(searchText.toLowerCase())){
      return contact;
    }
  }))
}

useEffect(handleSearch, [searchText, contacts]);

  return (
    <div className="appContainer">
      <NavComponent />

      <input className="search" type='text' placeholder='Search...' value={searchText} onChange={(e)=> {setSearchText(e.target.value); handleSearch();}}/>

    {/*   {contacts.map((contact) => { */}
    {filteredContacts.map((contact) => {
        console.log("contacts map id: ",contact.id);
        return (
          <React.Fragment key={contact.id}>
            <ListItemComponent  contact={contact} />
            </React.Fragment>
        )
      })}
    </div>
  )
}
MainPage.propTypes = {
  contacts: PropTypes.array.isRequired,
};
export default MainPage
