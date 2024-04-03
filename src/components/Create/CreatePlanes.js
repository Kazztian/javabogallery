import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CreatePlanes = () => {
    let navigate = useNavigate();

    const [plan, setPlan] = useState({
        nombreP: "",
        descripcionP: "",
        propietario_plan: "",
        totalcuposP: "",
        precioP: "",
        jornadaP: "",
        FechaP: "", // Establecer valor predeterminado si es necesario
        FechafinalP: "", // Establecer valor predeterminado si es necesario
        Id_lugar: "",
        Id_empresa: "",
        Id_categorias: ""
    });

    const { nombreP, descripcionP, propietario_plan, totalcuposP, precioP, jornadaP, FechaP, FechafinalP, Id_lugar, Id_empresa, Id_categorias } = plan;

    const onInputChange = (e) => {
        setPlan({ ...plan, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8086/api/plan/create", plan);
            navigate("/ListPlan"); // Redirigir a la lista de planes después de crear uno nuevo
        } catch (error) {
            console.error("Error al crear el plan:", error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='formulario-registro'>
                        <h1>Crear Plan</h1>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='nombreP'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={nombreP} type="text" name="nombreP" placeholder="Nombre del plan" required />
                            </div>
                            <br />
                            <div className='descripcionP'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={descripcionP} type="text" name="descripcionP" placeholder="Descripción del plan" required />
                            </div>
                            <br />
                            <div className='propietario_plan'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={propietario_plan} type="text" name="propietario_plan" placeholder="Propietario del plan" required />
                            </div>
                            <br />
                            <div className='totalcuposP'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={totalcuposP} type="number" name="totalcuposP" placeholder="Total de cupos" required />
                            </div>
                            <br />
                            <div className='precioP'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={precioP} type="number" name="precioP" placeholder="Precio del plan" required />
                            </div>
                            <br />
                            <div className='jornadaP'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={jornadaP} type="text" name="jornadaP" placeholder="Jornada" required />
                            </div>
                            <br />
                            <div className='FechaP'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={FechaP} type="date" name="FechaP" placeholder="Fecha de inicio" required />
                            </div>
                            <br />
                            <div className='FechafinalP'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={FechafinalP} type="date" name="FechafinalP" placeholder="Fecha final" required />
                            </div>
                            <br />
                            <div className='Id_lugar'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={Id_lugar} type="text" name="Id_lugar" placeholder="ID del lugar" required />
                            </div>
                            <br />
                            <div className='Id_empresa'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={Id_empresa} type="text" name="Id_empresa" placeholder="ID de la empresa" required />
                            </div>
                            <br />
                            <div className='Id_categorias'>
                                <input className='front-contol' onChange={(e) => onInputChange(e)} value={Id_categorias} type="text" name="Id_categorias" placeholder="ID de la categoría" required />
                            </div>
                            <br />
                            <div className="form-check mb-3">
                                <button type="submit">Crear Plan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
