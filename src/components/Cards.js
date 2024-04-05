import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>¡Echa un vistazo a estos LUGARES Y PLANES COOL!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='El Parque Simón Bolívar en Bogotá, Colombia, es un oasis urbano que ofrece naturaleza y actividades recreativas en honor al Libertador de América Latina.'
              label='Naturaleza'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Monserrate: montaña sagrada de Bogotá, Colombia, ofrece vistas panorámicas y un santuario religioso, siendo un destino imperdible para turistas y peregrinos.'
              label='Cultura'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='La ciudad nocturna se convierte en un lienzo de luces centelleantes y actividad frenética, donde la vida nocturna cobra vida y los edificios se erigen como testigos de historias por descubrir.'
              label='Belleza Nocturna y adrenalina'
              path='/services'
            />  
            <CardItem
              src='images/img-4.jpg'
              text='El arte urbano transforma las calles en galerías al aire libre, donde la creatividad estalla en cada esquina. Los grafitis y murales dan voz a la diversidad cultural y a las expresiones más audaces, convirtiendo el paisaje urbano en una obra de arte viva y en constante evolución.'
              label='Arte Ubano Bogotano'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Hoteles: donde el lujo y la comodidad se fusionan para crear experiencias inolvidables, elevando el arte de la hospitalidad a nuevas alturas.'
              label='Comodidad y lujo'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
