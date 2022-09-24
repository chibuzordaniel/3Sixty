import { Main, Signup, Signin, Draft, Login, Setup, Notepage, Delete  } from './components'
import './App.css';
import {Route, Routes} from 'react-router-dom'



function App() {
   return (
    <>
     <Routes>
      
        <Route path='/Main' element={<Main />}/>
        <Route path='Signin' element={<Signin />}/>
        <Route path='Signup' element={ <Signup />}/>
        <Route path='Draft' element={  <Draft/>}/>
        <Route path=' Login' element={  <Login/>}/>
        <Route path='Setup' element={  <Setup/>}/>
        <Route path='Notepage' element={<Notepage/> }/>
        <Route path='Delete' element={<Delete/> }/>

     </Routes>
      

     
     
    </>
   )
}

export default App;
