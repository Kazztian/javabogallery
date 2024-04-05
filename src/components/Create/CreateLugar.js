import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CreateLugar = () => {
    let navigate = useNavigate();

    const [lugar, setLugar] = useState({
        nombreL: "",
        localidadL: "",
        barrioL: "",
        direccionL: "",
        tipoL: "",
        descripcionL: "",
        fecha_PublicacionL: "",
        Id_usu: ""
    });

    const { nombreL, localidadL, barrioL, direccionL, tipoL, descripcionL, fecha_PublicacionL, Id_usu } = lugar;

    const onInputChange = (e) => {
        setLugar({ ...lugar, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8086/api/lugar/create", lugar);
        navigate("/ListLugar"); 
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='formulario-registro'>
                    <div className="text-center">
    <h1 className="bg-dark text-white">Crear Lugar</h1>
</div>
                        <form onSubmit={onSubmit}>
                            <div className='nombreL'>
                                <input className='form-control' onChange={onInputChange} value={nombreL} type="text" name="nombreL" placeholder="Ingrese el nombre" required />
                            </div>
                            <br />

                            <div className='localidadL'>
                                <input className='form-control' onChange={onInputChange} value={localidadL} type="text" name="localidadL" placeholder="Ingrese la localidad" required />
                            </div>
                            <br />

                            <div className='barrioL'>
                                <input className='form-control' onChange={onInputChange} value={barrioL} type="text" name="barrioL" placeholder="Ingrese el barrio" required />
                            </div>
                            <br />

                            <div className='direccionL'>
                                <input className='form-control' onChange={onInputChange} value={direccionL} type="text" name="direccionL" placeholder="Ingrese la dirección" required />
                            </div>
                            <br />

                            <div className='tipoL'>
                                <input className='form-control' onChange={onInputChange} value={tipoL} type="text" name="tipoL" placeholder="Ingrese el tipo de lugar" required />
                            </div>
                            <br />

                            <div className='descripcionL'>
                                <input className='form-control' onChange={onInputChange} value={descripcionL} type="text" name="descripcionL" placeholder="Ingrese la descripción" required />
                            </div>
                            <br />

                            <div className='fecha_PublicacionL'>
                                <input className='form-control' onChange={onInputChange} value={fecha_PublicacionL} type="date" name="fecha_PublicacionL" placeholder="Ingrese la fecha" required />
                            </div>
                            <br />

                            <div className="Id_usu">
                                <input className="form-control" onChange={onInputChange} value={Id_usu} type="number" name="Id_usu" placeholder="Ingrese el ID del usuario" required />
                            </div>
                            <br />

                            <div className="form-check mb-3">
                                <button type="submit" className="btn btn-primary">Registrar Lugar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
