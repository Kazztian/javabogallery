import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const EditPlanes = () => {
    let navigate = useNavigate();
    const { id_planes } = useParams();

    const [plan, setPlan] = useState({
        nombreP: "",
        descripcionP: "",
        propietario_plan: "",
        totalcuposP: "",
        precioP: "",
        jornadaP: "",
        FechaP: "",
        FechafinalP: "",
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
            await axios.put(`http://localhost:8086/api/plan/update/${id_planes}`, plan);
            navigate("/ListPlan");
        } catch (error) {
            console.error("Error al editar el plan:", error);
        }
    };

    useEffect(() => {
        const loadPlan = async () => {
            try {
                const response = await axios.get(`http://localhost:8086/api/plan/${id_planes}`);
                setPlan(response.data.data);
            } catch (error) {
                console.error("Error al cargar el plan:", error);
            }
        };
        loadPlan();
    }, [id_planes]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='formulario-registro'>
                        <h1>Editar Plan</h1>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='nombreP'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={nombreP} type="text" name="nombreP" placeholder="Nombre del plan" required />
                            </div>
                            <br />
                            <div className='descripcionP'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={descripcionP} type="text" name="descripcionP" placeholder="Descripción del plan" required />
                            </div>
                            <br />
                            <div className='propietario_plan'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={propietario_plan} type="text" name="propietario_plan" placeholder="Propietario del plan" required />
                            </div>
                            <br />
                            <div className='totalcuposP'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={totalcuposP} type="number" name="totalcuposP" placeholder="Total de cupos" required />
                            </div>
                            <br />
                            <div className='precioP'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={precioP} type="number" name="precioP" placeholder="Precio del plan" required />
                            </div>
                            <br />
                            <div className='jornadaP'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={jornadaP} type="text" name="jornadaP" placeholder="Jornada" required />
                            </div>
                            <br />
                            <div className='FechaP'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={FechaP} type="date" name="FechaP" placeholder="Fecha de inicio" required />
                            </div>
                            <br />
                            <div className='FechafinalP'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={FechafinalP} type="date" name="FechafinalP" placeholder="Fecha final" required />
                            </div>
                            <br />
                            <div className='Id_lugar'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={Id_lugar} type="text" name="Id_lugar" placeholder="ID del lugar" required />
                            </div>
                            <br />
                            <div className='Id_empresa'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={Id_empresa} type="text" name="Id_empresa" placeholder="ID de la empresa" required />
                            </div>
                            <br />
                            <div className='Id_categorias'>
                                <input className='fron-contol' onChange={(e) => onInputChange(e)} value={Id_categorias} type="text" name="Id_categorias" placeholder="ID de la categoría" required />
                            </div>
                            <br />
                            <div className="form-check mb-3">
                                <button type="submit">Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
