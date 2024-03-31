import { Route, Routes } from 'react-router-dom';
import './App.css';

import {CreateUser} from './components/Create/CreateUser.js';
import {ListUsuario} from './components/Views/ListUsuario.js'
import {EditUser} from './components/Edit/EditUser.js';
import Header from './components/Header.js';

function App() {
  return (
    <>
    <Header/>
      <div className='App'>
        <Routes>
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/ListUser" element={<ListUsuario />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
