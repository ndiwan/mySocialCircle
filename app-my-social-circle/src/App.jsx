import{BrowserRouter, Routes,  Route} from 'react-router-dom'
import MainPage from './Components/MainPage'
import FormComponent from './Components/FormComponent'
import DetailsComponent from './Components/DetailsComponent'
import PageNotFoundComponent from './Components/PageNotFoundComponent'
import EditComponent from './Components/EditComponent'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/details" element={<DetailsComponent />} />
        <Route path="/edit" element={<EditComponent />} />
        <Route path="*" element={<PageNotFoundComponent />} />
        </Routes>
        </BrowserRouter >     
    </>
  )
}

export default App
