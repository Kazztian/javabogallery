import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';

export const  EditUser = () => {


    let navigate = useNavigate()
    const {id} = useParams()
    
    const [usuario, setUsurio] = useState({

       
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



    })

    const{ nombre_usu, apellido_uso, fecha_usu, edad, direccion_usu, correo_usu, password_usu,telefono_usu,genero_usu,primer_idioma,segundo_idioma} = usuario
  

    
    const onInputchange = (e) => {
        setUsurio({...usuario,[e.target.name]:e.target.value})
    };
    const onSubmit = async (e) =>{

        e.preventDefault();
        axios.put(`http://localhost:8086/api/usuario/update/${id}`,usuario)
        navigate("ListUsuario.js");
    };

    useEffect(() =>{
        const loadUsuario = async () =>{
            const result = await axios.get(`http://localhost:8086/api/usuario/${id}`);
            setUsurio(result.data.data);
        };
        loadUsuario();

    }, [id]);

    return (
        <div className='container'>
    <div className='row'>
        <div className='col-12'>
            <div className='formulario-registro'>
            <div className="text-center">
    <h1 className="bg-dark text-white">Editar Usuario</h1>
</div>

                <form onSubmit={(e) => onSubmit(e)}>
                 
                    
                    <div className='nombre_usu'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {nombre_usu} type={"text"} name="nombre_usu" placeholder="Ingrese el nombre" required></input>
                    </div>
                    <br />
                    <div className='apellido_uso'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {apellido_uso} type={"text"} name="apellido_uso" placeholder="Ingrese el apellido" required></input>
                    </div>
                    <br />
                    <div className='fecha_usu'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {fecha_usu} type={"date"} name="fecha_usu" placeholder="Ingrese la fecha" required></input>
                    </div>
                    <br />
                    <div className='edad'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {edad} type={"number"} name="edad" placeholder="Ingrese la edad" required></input>
                    </div>
                    <br />
                    <div className='direccion_usu'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {direccion_usu} type={"text"} name="direccion_usu" placeholder="Ingrese la direccion" required></input>
                    </div>
                    <br />
                    <div className="correo_usu">
                    <input className="form-control" onChange = {(e) => onInputchange(e)} value = {correo_usu} type={"email"} name="correo_usu" placeholder="Ingrese su Correo" required />
                    </div>
                  <br />
                  <div className="password_usu">
                    <input className="form-control" onChange = {(e) => onInputchange(e)} value = {password_usu} type={"password"} name="password_usu" placeholder="Ingrese su Contraseña" required />
                    </div>
                    <br />
                    <div className="telefono_usu">
                    <input className="form-control" onChange = {(e) => onInputchange(e)} value = {telefono_usu} type={"number"} name="telefono_usu" placeholder="Ingrese su Numero Telefonico" required />
                    </div>
                    <br />
                    <div className='genero_usu'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {genero_usu} type={"text"} name="genero_usu" placeholder="Ingrese su genero" required></input>
                    </div>
                    <br />
                    <div className='primer_idioma'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {primer_idioma} type={"text"} name="primer_idioma" placeholder="Ingrese su primer idioma" required></input>
                    </div>
                    <br />
                    <div className='segundo_idioma'>
                        <input className='form-control' onChange={(e) => onInputchange(e)} value = {segundo_idioma} type={"text"} name="segundo_idioma" placeholder="Ingrese su segundo idioma" required></input>
                    </div>
                    <br />

                    <div className="form-check mb-3">
            <button type="submit">Registrarse</button>
            </div>

                    
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
