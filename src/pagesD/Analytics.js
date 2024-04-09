import React from 'react';
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Importa el Sidebar
import { ListUsuario } from '../components/Views/ListUsuario';





const Analytics = () => {
    // Renderiza el Sidebar y el ListUser en la misma página
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="content">
                <ListUsuario />
                {/* Puedes mantener el contenido original de Analytics aquí */}
                <h1>Analytics Page</h1>
                <p></p>
            </div>
        </div>
    );
};

export default Analytics;
