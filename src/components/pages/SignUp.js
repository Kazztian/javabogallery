import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import './SignUp.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: 'hola',
    email: 'hola@gmail.com',
    password: '123456'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al backend si es necesario

    // Después de enviar el formulario, usa navigate para redirigir al usuario al dashboard
    navigate('/dashboard');
  };

  return (
    <div className='sign-up-container'>
      <h1>Login</h1>
      <div className='sign-up-form-container'>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className='submit-btn'>Ingresar</button>
        </form>
      </div>
    </div>
  );
}
