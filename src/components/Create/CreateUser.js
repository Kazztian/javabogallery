import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Create.css';

export const CreateUser = () => {
    let navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        nombre_usu: "",
        apellido_uso: "",
        fecha_usu: "",
        edad: "",
        direccion_usu: "",
        correo_usu: "",
        password_usu: "",
        telefono_usu: "",
        genero_usu: "",
        primer_idioma: "",
        segundo_idioma: ""
    });

    const { nombre_usu, apellido_uso, fecha_usu, edad, direccion_usu, correo_usu, password_usu, telefono_usu, genero_usu, primer_idioma, segundo_idioma } = usuario;

    const onInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        
            await axios.post("http://localhost:8086/api/usuario/create", usuario);
            navigate("/ListUsuario");
      
    };

    return (
        <div className='conteiner'>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header bg-dark text-white text-center'>
                            <h1>Crear Usuario</h1>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={onSubmit}>
                                <div className='row'>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='text' name='nombre_usu' value={nombre_usu} onChange={onInputChange} placeholder='Ingrese el nombre' required />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='text' name='apellido_uso' value={apellido_uso} onChange={onInputChange} placeholder='Ingrese el apellido' required />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='date' name='fecha_usu' value={fecha_usu} onChange={onInputChange} placeholder='Ingrese la fecha' required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='number' name='edad' value={edad} onChange={onInputChange} placeholder='Ingrese la edad' required />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='text' name='direccion_usu' value={direccion_usu} onChange={onInputChange} placeholder='Ingrese la dirección' required />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='email' name='correo_usu' value={correo_usu} onChange={onInputChange} placeholder='Ingrese su correo' required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='password' name='password_usu' value={password_usu} onChange={onInputChange} placeholder='Ingrese su contraseña' required />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='number' name='telefono_usu' value={telefono_usu} onChange={onInputChange} placeholder='Ingrese su número telefónico' required />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='text' name='genero_usu' value={genero_usu} onChange={onInputChange} placeholder='Ingrese su género' required />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='text' name='primer_idioma' value={primer_idioma} onChange={onInputChange} placeholder='Ingrese su primer idioma' required />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <input className='form-control' type='text' name='segundo_idioma' value={segundo_idioma} onChange={onInputChange} placeholder='Ingrese su segundo idioma' required />
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <button className='btn btn-primary btn-block' type='submit'>Registrar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
