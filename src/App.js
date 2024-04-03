import { Route, Routes } from 'react-router-dom';
import './App.css';

import {CreateUser} from './components/Create/CreateUser.js';
import { CreateLugar } from './components/Create/CreateLugar.js';
import { CreateActividad } from './components/Create/CreateActividad.js';
import {ListUsuario} from './components/Views/ListUsuario.js';
import { ListLugar } from './components/Views/ListLugar.js';
import { ListActividad} from './components/Views/ListActividad.js';
import {EditUser} from './components/Edit/EditUser.js';
import { EditLugar } from './components/Edit/EditLugar.js';
import { EditActividad } from './components/Edit/EditActividad.js';

import Header from './components/Header.js';

//


function App() {
  return (
    <>
    <Header/>
      <div className='App'>
        <Routes>
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path='/CreateLugar' element={<CreateLugar/>}/>
          <Route path='/CreateActividad' element={<CreateActividad/>}/>
        
          <Route path="/ListUser" element={<ListUsuario />} />
          <Route path='/ListLugar' element={<ListLugar/>}/>
          <Route path='/ListActividad' element={<ListActividad/>}/>

          <Route path="/EditUser/:id" element={<EditUser />} />
          <Route path="/EditLugar/:id" element={<EditLugar />} />
          <Route path='/EditActividad/:id' element={<EditActividad/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
