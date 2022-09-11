import { Main, Signup, Signin, Draft } from './components'
import './App.css';
import {Route, Routes} from 'react-router-dom'

function App() {
   return (
    <>
     <Routes>
        <Route path='' element={<Main />}/>
        <Route path='' element={<Signin />}/>
        <Route path='' element={ <Signup />}/>
        <Route path='Draft' element={  <Draft/>}/>
     </Routes>
      
      
     
    
    </>
   )
}

export default App;
