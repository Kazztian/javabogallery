import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const  CreateActividad = () => {
//
    let navigate = useNavigate()

    const [actividad,  setListActividad] = useState({

        nombreACT: "",
        descripcionACT: "",
        fecha_inicioACT:"",
        fecha_finACT:"",
        jornada:"",
        valor:"",
        url_act:"",
        Id_lugar:""

    })
    const{nombreACT, descripcionACT, fecha_inicioACT,fecha_finACT, jornada, valor, url_act,Id_lugar } = actividad

    const onInputchange = (e) =>{

        setListActividad({...actividad ,[e.target.name]:e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8086/api/actividad/create", actividad);
        navigate("/ListActividad");
    };
    

  return (
    <div className='conteiner'>
    <div className='row justify-content-center mt-5'>
        <div className='col-md-6'>
            <div className='card'>
                <div className='card-header bg-dark text-white text-center'>
    <h1 className="bg-dark text-white">crear actividad</h1>
</div>
<div className='card-body'>
            <form onSubmit={(e) => onSubmit(e)}>

            <div className='nombreACT'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {nombreACT} type={"text"} name="nombreACT" placeholder="Ingrese el nombre" required></input>
                    </div>
                    <br />

                    <div className='descripcionACT'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {descripcionACT} type={"text"} name="descripcionACT" placeholder="Ingrese la descripcion" required></input>
                    </div>
                    <br />

                    <div className='fecha_inicioACT'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {fecha_inicioACT} type={"date"} name="fecha_inicioACT" placeholder="Ingrese la fecha" required></input>
                    </div>
                    <br />

                    <div className='fecha_finACT'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {fecha_finACT} type={"date"} name="fecha_finACT" placeholder="Ingrese la fecha final" required></input>
                    </div>
                    <br />

                    <div className='jornada'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {jornada} type={"text"} name="jornada" placeholder="Ingrese la jornada" required></input>
                    </div>
                    <br />


                    <div className='url_act'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {url_act} type={"text"} name="url_act" placeholder="Ingrese la url" ></input>
                    </div>
                    <br />

                    <div className='valor'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {valor} type={"number"} name="valor" placeholder="Ingrese el precio" required></input>
                    </div>
                    <br />

                    <div className="Id_lugar">
              <input className="form-control" onChange = {(e) => onInputchange(e)} value = {Id_lugar} type={"number"} name="Id_lugar" placeholder="Ingrese el id del lugar" required />
            </div>
            <br /> 
                    <div className="form-check mb-3">
            <button type="submit"  className="btn btn-primary"> registrar Actividad</button>
            </div>

            </form>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
