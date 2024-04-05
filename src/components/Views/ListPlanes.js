import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const ListPlanes = () => {
    const [planList, setPlanList] = useState([]);

    useEffect(() => {
        getPlanes();
    }, []);

    const getPlanes = async () => {
        try {
            const response = await axios.get("http://localhost:8086/api/plan/all");
            setPlanList(response.data.data);
        } catch (error) {
            console.error("Error fetching planes: ", error);
        }
    };

    const deletePlan = async (id_planes) => {
        try {
            await axios.delete(`http://localhost:8086/api/plan/delete/${id_planes}`);
            getPlanes();
        } catch (error) {
            console.error("Error deleting plan: ", error);
        }
    };

    return (
        <>
        <div className="container">
            <h2 className="text-center">Lista de Planes</h2>
            <Link to="/createPlan" className="btn btn-primary mb-3">Agregar Plan</Link>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Propietario</th>
                        <th>Total de Cupos</th>
                        <th>Precio</th>
                        <th>Jornada</th>
                        <th>Fecha de Inicio</th>
                        <th>Fecha Final</th>
                        <th>ID Lugar</th>
                        <th>ID Empresa</th>
                        <th>ID Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {planList.map((plan, index) => (
                        <tr key={index}>
                            <td>{plan.id_planes}</td>
                            <td>{plan.nombreP}</td>
                            <td>{plan.descripcionP}</td>
                            <td>{plan.propietario_plan}</td>
                            <td>{plan.totalcuposP}</td>
                            <td>{plan.precioP}</td>
                            <td>{plan.jornadaP}</td>
                            <td>{plan.FechaP}</td>
                            <td>{plan.FechafinalP}</td>
                            <td>{plan.Id_lugar}</td>
                            <td>{plan.Id_empresa}</td>
                            <td>{plan.Id_categorias}</td>
                            <td>
                                <button className="btn btn-primary mx-2">Ver</button>
                                <Link to={`/EditPlan/${plan.id_planes}`} className="btn btn-outline-primary mx-2">Editar</Link>
                                <button onClick={() => deletePlan(plan.id_planes)} className="btn btn-danger mx-2">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};
export default ListPlanes;
