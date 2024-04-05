import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const EditLugar = () => {

    let navigate = useNavigate()
    const { id_lugar } = useParams()

    const [lugar, setLugar] = useState({
        nombreL: "",
        localidadL: "",
        barrioL: "",
        direccionL: "",
        tipoL: "",
        descripcionL: "",
        fecha_PublicacionL: ""
    });

    const { nombreL, localidadL, barrioL, direccionL, tipoL, descripcionL, fecha_PublicacionL, Id_usu } = lugar

    const onInputchange = (e) => {
        setLugar({ ...lugar, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8086/api/lugar/update/${id_lugar}`, lugar)
        navigate("/ListLugar.js"); // Navegar a la lista de lugares después de editar
    };

    useEffect(() => {
        const loadLugar = async () => {
            const result = await axios.get(`http://localhost:8086/api/lugar/${id_lugar}`);
            setLugar(result.data.data);
        };
        loadLugar();
    }, [id_lugar]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='formulario-registro'>
                    <div className="text-center">
    <h1 className="bg-dark text-white">Editar Lugar</h1>
</div>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='nombreL'>
                                <input className='form-control' onChange={(e) => onInputchange(e)} value={nombreL} type="text" name="nombreL" placeholder="Ingrese el nombre" required />
                            </div>
                            <br />

                            <div className='localidadL'>
                                <input className='form-control' onChange={(e) => onInputchange(e)} value={localidadL} type="text" name="localidadL" placeholder="Ingrese la localidad" required />
                            </div>
                            <br />

                            <div className='barrioL'>
                                <input className='form-control' onChange={(e) => onInputchange(e)} value={barrioL} type="text" name="barrioL" placeholder="Ingrese el barrio" required />
                            </div>
                            <br />

                            <div className='direccionL'>
                                <input className='form-control' onChange={(e) => onInputchange(e)} value={direccionL} type="text" name="direccionL" placeholder="Ingrese la dirección" required />
                            </div>
                            <br />

                            <div className='tipoL'>
                                <input className='form-control' onChange={(e) => onInputchange(e)} value={tipoL} type="text" name="tipoL" placeholder="Ingrese el tipo de lugar" required />
                            </div>
                            <br />

                            <div className='descripcionL'>
                                <input className='form-control' onChange={(e) => onInputchange(e)} value={descripcionL} type="text" name="descripcionL" placeholder="Ingrese la descripción" required />
                            </div>
                            <br />

                            <div className='fecha_PublicacionL'>
                                <input className='form-control' onChange={(e) => onInputchange(e)} value={fecha_PublicacionL} type="date" name="fecha_PublicacionL" placeholder="Ingrese la fecha" required />
                            </div>
                            <br />

                        

                            <div className="form-check mb-3">
                                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
