import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const  ListUsuario = () => {
    const [listUsuarios, setListUsuarios] = useState([]);

    useEffect(() => {
        getUsuarios();
    }, []);

    //Get all users
    const getUsuarios = () => {
        axios.get("http://localhost:8086/api/usuario/all")
            .then((response) => {
                setListUsuarios(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deleteUsuario = async (id_usu) => {
        await axios.delete(`http://localhost:8086/api/usuario/delete/${id_usu}`);
        getUsuarios();
    };

    return (
        <>
            <div className='container'>
                <h2 className='text-center'>Lista de Usuarios</h2>
                <Link to="/CreateUser" className='btn btn-primary'>Agregar usuario</Link>

                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>APELLIDO</th>
                            <th>FECHA</th>
                            <th>EDAD</th>
                            <th>DIRECCION</th>
                            <th>CORREO</th>
                            <th>CONTRASEÑA</th>
                            <th>TELEFONO</th>
                            <th>GENERO</th>
                            <th>PRIMER IDIOMA</th>
                            <th>SEGUNDO IDIOMA</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsuarios.map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre_usu}</td>
                                <td>{usuario.apellido_uso}</td>
                                <td>{usuario.fecha_usu}</td>
                                <td>{usuario.edad}</td>
                                <td>{usuario.direccion_usu}</td>
                                <td>{usuario.correo_usu}</td>
                                <td>{usuario.password_usu}</td>
            
                                <td>{usuario.telefono_usu}</td>
                                <td>{usuario.genero_usu}</td>
                                <td>{usuario.primer_idioma}</td>
                                <td>{usuario.segundo_idioma}</td>
                                <td>
                                  <Link to={`/EditUser/${usuario.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
                                    <button onClick={() => deleteUsuario(usuario.id)} className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
