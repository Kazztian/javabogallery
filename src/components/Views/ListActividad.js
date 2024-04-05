import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const ListActividad = () => {

    const [ListActividad, setListActividad] = useState([]);

    useEffect(()=>{
        getActividad();
    },[]);
    
    const getActividad = () =>{
        axios.get("http://localhost:8086/api/actividad/all")
        .then((response) => {
            setListActividad(response.data.data);
        })
        .catch((e) => {
            console.log(e);
        });
    };

    const deleteActividad = async (id) =>{
        await axios.delete(`http://localhost:8086/api/actividad/delete/${id}`)
        getActividad()
    }
  return (
    <>
    <div className='container'>
        <h2 className='text-center'>Lista de Actividades</h2>
        <Link to="/CreateActividad" className='btn btn-primary'>Agregar Actividad</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCION</th>
                    <th>FECHA INICIO</th>
                    <th>FECHA FIN</th>
                    <th>JORNADA</th>
                    <th>VALOR</th>
                    <th>URL</th>


                </tr>
            </thead>
            <tbody>
                {ListActividad.map((actividad, index) =>(
                    <tr key={index}>
                        <td>{actividad.id}</td>
                        <td>{actividad.nombreACT}</td>
                        <td>{actividad.descripcionACT}</td>
                        <td>{actividad.fecha_inicioACT}</td>
                        <td>{actividad.fecha_finACT}</td>
                        <td>{actividad.jornada}</td>
                        <td>{actividad.valor}</td>
                        <td>{actividad.url_ACT}</td>
                        <td>{actividad.Id_lugar}</td>

                        <td>
                                    
                                    <Link to={`/EditActividad/${actividad.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
                                    <button onClick={() => deleteActividad(actividad.id)} className="btn btn-danger mx-2">Delete</button>
                                </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    </div>
    </>
  )
}
