
import React from 'react';
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Importa el Sidebar
import { ListActividad } from '../components/Views/ListActividad';
const Product = () => {
    // Renderiza el Sidebar y redirige automáticamente a la ruta /ListLugar
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="content">
            <ListActividad />
                <h1>Analytics Page</h1>
                <p></p>
            </div>
     
        </div>
    );
};

export default Product;