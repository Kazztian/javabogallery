import React from 'react';
import Sidebar from '../components/Sidebar'; // Importa el Sidebar

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Agrega el Sidebar aquí */}
      {/* Aquí va el contenido del Dashboard */}
    </div>
  );
};

export default Dashboard;
