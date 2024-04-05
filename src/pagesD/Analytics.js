import React from 'react';
import { Navigate } from 'react-router-dom';

const Analytics = () => {
    // Redirige automáticamente a la lista de usuarios cuando se monta el componente
    return <Navigate to="/ListUser" replace />;
};

export default Analytics;
