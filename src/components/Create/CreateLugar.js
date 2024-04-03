
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CreateLugar = () => {
   let navigate = useNavigate()

   const [Lugar , setLugar] = useState ({

    nombreL: "",
    localidadL: "",
    barrioL: "",
    direccionL: "",
    tipoL:"",
    descripcionL:"",
    fecha_PublicacionL:"",
    Id_usu:""


   })

   const{nombreL, localidadL, barrioL, direccionL, tipoL, descripcionL, fecha_PublicacionL, Id_usu } = Lugar

   const onInputchange = (e) => {
    setLugar({...Lugar,[e.target.name]:e.target.value})
   };
  

   const onSubmit = async (e) =>{
    e.prevenDefaul();
    axios.put("http://localhost:8086/api/lugar/create", Lugar)
    navigate("ListLugar.js")
   };
   


  return (
    <div className='conteiner'>
        <div className='row'>
            <div className='col-12'>
                <div className='formulario-registro'>
                    <h1>Editar Usuario</h1>
                    <form onSubmit={(e) => onSubmit(e)}>
                    <div className='nombreL'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {nombreL} type={"text"} name="nombreL" placeholder="Ingrese el nombre" required></input>
                    </div>
                    <br />

                    <div className='localidadL'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {localidadL} type={"text"} name="localidadL" placeholder="Ingrese la localidad" required></input>
                    </div>
                    <br />

                    <div className='barrioL'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {barrioL} type={"text"} name="barrioL" placeholder="Ingrese el barrio" required></input>
                    </div>
                    <br />

                    <div className='direccionL'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {direccionL} type={"text"} name="direccionL" placeholder="Ingrese la direccion" required></input>
                    </div>
                    <br />

                    <div className='tipoL'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {tipoL} type={"text"} name="tipoL" placeholder="Ingrese el tipo lugar" required></input>
                    </div>
                    <br />

                    <div className='descripcionL'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {descripcionL} type={"text"} name="descripcionL" placeholder="Ingrese la descripccion" required></input>
                    </div>
                    <br />

                    <div className='fecha_PublicacionL'>
                        <input className='fron-contol' onChange={(e) => onInputchange(e)} value = {fecha_PublicacionL} type={"date"} name="fecha_PublicacionL" placeholder="Ingrese la fecha" required></input>
                    </div>
                    <br />

                    <div className="Id_usu">
              <input className="form-control" onChange = {(e) => onInputchange(e)} value = {Id_usu} type={"number"} name="Id_usu" placeholder="Ingrese el id del usuario" required />
            </div>
            <br />

            <div className="form-check mb-3">
            <button type="submit">Registrar Lugar</button>
            </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
