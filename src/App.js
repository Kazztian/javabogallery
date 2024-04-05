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
     <Navbar />
    {/* <Header/>  */}
      <div className='App'>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />


          <Route path="/" element={<Sidebar />} />
          <Route path="" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />





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
