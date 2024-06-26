import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import Sidebar from './components/Sidebar.js';
import Dashboard from './pagesD/Dashboard.js';
import About from './pagesD/About.js';
import Analytics from './pagesD/Analytics.js';
import Comment from './pagesD/Comment.js';
import Product from './pagesD/Product.js';
import ProductList from './pagesD/ProductList.js';




import {CreateUser} from './components/Create/CreateUser.js';
import { CreateLugar } from './components/Create/CreateLugar.js';
import { CreateActividad } from './components/Create/CreateActividad.js';

import {ListUsuario} from './components/Views/ListUsuario.js';
import { ListLugar } from './components/Views/ListLugar.js';
import { ListActividad} from './components/Views/ListActividad.js';

import {EditUser} from './components/Edit/EditUser.js';
import { EditLugar } from './components/Edit/EditLugar.js';
import { EditActividad } from './components/Edit/EditActividad.js';

 





function App() {
  return (
    <>
     <Navbar />
    {/* <Header/>  */}
      <div className='App'>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />


         
          <Route path="" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />





          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path='/CreateLugar' element={<CreateLugar/>}/>
          <Route path='/CreateActividad' element={<CreateActividad/>}/>
        
          <Route path="/ListUser" element={<ListUsuario />} />
          <Route path='/ListLugar' element={<ListLugar/>}/>
          <Route path='/ListActividad' element={<ListActividad/>}/>

          <Route path="/EditUser/:id" element={<EditUser />} />

          <Route path="/EditLugar/:id_lugar" element={<EditLugar />} />
          <Route path='/EditActividad/:id' element={<EditActividad/>}/>

         

        </Routes>
      </div>
    </>
  );
}

export default App;
