import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const EditActividad = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [actividad, setActividad] = useState({
        NombreACT: "",
        DescripcionACT: "",
        Fecha_inicioACT: "",
        Fecha_finACT: "",
        Jornada: "",
        Valor: "",
        URL_ACT: "",
        Id_lugar: ""
    });

    const { nombreACT, descripcionACT, fecha_inicioACT, fecha_finACT, jornada, valor, url_ACT, Id_lugar } = actividad;

    const onInputChange = (e) => {
        setActividad({ ...actividad, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8086/api/actividad/update/${id}`, actividad);
        navigate("/ListActividad");
    };

    useEffect(() => {
        const loadActividad = async () => {
            const result = await axios.get(`http://localhost:8086/api/actividad/${id}`);
            setActividad(result.data.data); 
        };
        loadActividad();
    }, [id]);

    return (
        <div className='container'>
            <div className='row'>
            <div className='col-12'>
                <div className='formulario-registro'>
                <div className="text-center">
    <h1 className="bg-dark text-white">Editar Actividad</h1>
</div>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='nombreACT'>
                            <input className='form-control' onChange={(e) => onInputChange(e)} value={nombreACT} type="text" name="NombreACT" placeholder="Ingrese el nombre" required />
                        </div>
                        <br />

                        <div className='DescripcionACT'>
                            <input className='form-control' onChange={(e) => onInputChange(e)} value={descripcionACT} type="text" name="descripcionACT" placeholder="Ingrese la descripción" required />
                        </div>
                        <br />

                        <div className='fecha_inicioACT'>
                            <input className='form-control' onChange={(e) => onInputChange(e)} value={fecha_inicioACT} type="date" name="fecha_inicioACT" placeholder="Ingrese la fecha" required />
                        </div>
                        <br />

                        <div className='fecha_finACT'>
                            <input className='form-control' onChange={(e) => onInputChange(e)} value={fecha_finACT} type="date" name="fecha_finACT" placeholder="Ingrese la fecha final" required />
                        </div>
                        <br />

                        <div className='jornada'>
                            <input className='form-control' onChange={(e) => onInputChange(e)} value={jornada} type="text" name="jornada" placeholder="Ingrese la jornada" required />
                        </div>
                        <br />

                        <div className='url_ACT'>
                            <input className='form-control' onChange={(e) => onInputChange(e)} value={url_ACT} type="text" name="url_ACT" placeholder="Ingrese la URL" />
                        </div>
                        <br />

                        <div className='valor'>
                            <input className='form-control' onChange={(e) => onInputChange(e)} value={valor} type="number" name="valor" placeholder="Ingrese el valor" required />
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
