import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const  CreateActividad = () => {
//
    let navigate = useNavigate()

    const [actividad,  setListActividad] = useState({

        NombreACT: "",
        DescripcionACT: "",
        Fecha_inicioACT:"",
        Fecha_finACT:"",
        Jornada:"",
        Valor:"",
        URL_ACT:"",
        Id_lugar:""

    })
    const{NombreACT, DescripcionACT, Fecha_inicioACT,Fecha_finACT, Jornada, Valor, URL_ACT,Id_lugar } = actividad

    const onInputchange = (e) =>{

        setListActividad({...actividad ,[e.target.name]:e.target.value})
    };

    const onSubmit = async (e) =>{

        e.preventDefault();
        axios.put("http://localhost:8086/api/actividad/create", actividad)
        navigate("ListActividad.js")
    };

  return (
    <div className='Container'>
        <div className='row'>
            <div className='Formulario-registro'>
            <h1>Editar Actividad</h1>
            <form onSubmit={(e) => onSubmit(e)}>

            <div className='NombreACT'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {NombreACT} type={"text"} name="NombreACT" placeholder="Ingrese el nombre" required></input>
                    </div>
                    <br />

                    <div className='DescripcionACT'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {DescripcionACT} type={"text"} name="DescripcionACT" placeholder="Ingrese la descripcion" required></input>
                    </div>
                    <br />

                    <div className='Fecha_inicioACT'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {Fecha_inicioACT} type={"date"} name="Fecha_inicioACT" placeholder="Ingrese la fecha" required></input>
                    </div>
                    <br />

                    <div className='Fecha_finACT'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {Fecha_finACT} type={"date"} name="Fecha_finACT" placeholder="Ingrese la fecha final" required></input>
                    </div>
                    <br />

                    <div className='Jornada'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {Jornada} type={"text"} name="Jornada" placeholder="Ingrese la jornada" required></input>
                    </div>
                    <br />


                    <div className='URL_ACT'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {URL_ACT} type={"text"} name="URL_ACT" placeholder="Ingrese la url" ></input>
                    </div>
                    <br />

                    <div className='Valor'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {Valor} type={"number"} name="Valor" placeholder="Ingrese la edad" required></input>
                    </div>
                    <br />

                    <div className="Id_lugar">
              <input className="form-control" onChange = {(e) => onInputchange(e)} value = {Id_lugar} type={"number"} name="Id_lugar" placeholder="Ingrese el id del lugar" required />
            </div>
            <br /> 
                    <div className="form-check mb-3">
            <button type="submit"> registrar Actividad</button>
            </div>

            </form>
            </div>
        </div>
    </div>
  )
}
