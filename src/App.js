import Main from './components/navbar/Main';
import './App.css';
import Login from './components/login/Login';
import Draft from './components/showcase/Draft';
import {Route, Routes} from "react-router-dom"
import Input from './input/Input';

function App() {
  return (
    <>
      <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/' element={<Login />} />
          
           <Route path='/3Sixty'>
           <Route index element={<Main />} />
            </Route>

            <Route path='/Sign'>
              <Route index element={<Draft />} />
            </Route>
          

        

      </Routes>
        
     
    </>
  );
}

export default App;
