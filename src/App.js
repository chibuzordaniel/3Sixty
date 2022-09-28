import { Main, Signup, Signin, Draft, Login, Setup, Notepage, Delete, Edit  } from './components'
import './App.css';
import {Route, Routes} from 'react-router-dom'




function App() {
   return (
    <>
     <Routes>
      
        <Route path='' element={<Main />}/>
        <Route path='/Main' element={<Main />}/>
        <Route path='' element={<Signin />}/>
        <Route path='' element={ <Signup />}/>
        <Route path='Draft' element={  <Draft/>}/>
        <Route path='' element={  <Login/>}/>
        <Route path='' element={  <Setup/>}/>
        <Route path='' element={<Notepage/> }/>
        <Route path='' element={<Delete/> }/>
        <Route path='' element={<Delete/> }/>
        <Route path='' element={<Edit/> }/>
     </Routes>
      

     
     
    </>
   )
}

export default App;
