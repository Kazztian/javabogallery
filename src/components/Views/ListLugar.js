import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ListLugar = () => {

    const [listLugar, setListLugar] = useState([]);

    useEffect(() => {
        getLugar();

    }, []);


    //Get all users
    const getLugar = () => {
        axios.get("http://localhost:8086/api/lugar/all")
            .then((response) => {
                setListLugar(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deleteLugar = async (id_lugar) => {
        await axios.delete(`http://localhost:8086/api/lugar/delete/${id_lugar}`);
        getLugar();
    };
     return (
            <div className='conteiner'>
                <h2 className='text-center'>Lista de lugares</h2>
                <Link to="/CreateLugar" className='btn btn-primary'>Agregar Lugar</Link>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>LOCALIDAD</th>
                            <th>BARRIO</th>
                            <th>DIRECCION</th>
                            <th>TIPO</th>
                            <th>DESCRIPCCION</th>
                            <th>FECHA</th>

                        </tr>

                    </thead>
                    <tbody>
                        {listLugar.map((lugar, index) => (
                            <tr key={index}>
                                <td>{lugar.id}</td>
                                <td>{lugar.nombreL}</td>
                                <td>{lugar.localidadL}</td>
                                <td>{lugar.barrioL}</td>
                                <td>{lugar.direccionL}</td>
                                <td>{lugar.tipoL}</td>
                                <td>{lugar.descripcionL}</td>
                                <td>{lugar.fecha_PublicacionL}</td>
                                <td>{lugar.Id_usu}</td>
                                <td>
                                    <Link to={`/EditLugar/${lugar.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
                                    <button onClick={() => deleteLugar(lugar.id)} className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    
    );
}
