import{BrowserRouter, Routes,  Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import MainPage from './Components/MainPage'
import FormComponent from './Components/FormComponent'
import DetailsComponent from './Components/DetailsComponent'
import PageNotFoundComponent from './Components/PageNotFoundComponent'
import EditComponent from './Components/EditComponent'
import './App.css';

function App() {
  //const[contacts, setContacts]= useState([]);
  
  const[contacts, setContacts]= useState(JSON.parse(localStorage.getItem('contacts')) || []);
console.log("app.js contact list",contacts);

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts]) 

  return (
    <>
    <BrowserRouter>
        <Routes>
       {/*  <Route path="/" element={<MainPage contacts={contacts} />} /> */}

        <Route index element={<MainPage contacts={contacts} />} /> 

 {/*     <Route exact element={<MainPage contacts={contacts} />} /> */}

        <Route path="/form" element={<FormComponent setContacts={setContacts} />} />

        <Route path="contact-detail/:id" element={<DetailsComponent contacts={contacts} setContacts={setContacts} />} />

        <Route path="contact-edit/:id" element={<EditComponent contacts={contacts} setContacts={setContacts} />} />

        <Route path="*" element={<PageNotFoundComponent />} />

        </Routes>
        </BrowserRouter >     
    </>
  )
}

export default App
