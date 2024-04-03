import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header.js';
import {CreateUser} from './components/Create/CreateUser.js';
import {ListUsuario} from './components/Views/ListUsuario.js'
import {EditUser} from './components/Edit/EditUser.js';


import {CreatePlanes} from "./components/Create/CreatePlanes.js";
import {ListPlanes} from "./components/Views/ListPlanes.js";
import {EditPlanes} from "./components/Edit/EditPlanes.js";


function App() {
  return (
    <>
    <Header/>
      <div className='App'>
        <Routes>
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/ListUser" element={<ListUsuario />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
          <Route path="/CreatePlan" element={<CreatePlanes/>}/>
          <Route path="/ListPlan" element={<ListPlanes/>}/>
          <Route path="/EditPlan/:id_planes" element={<EditPlanes/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
