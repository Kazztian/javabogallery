import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Únase a la Aventura para recibir nuestros mejores planes en la bella ciudad de Bogota
        </p>
        <p className='footer-subscription-text'>
        No lo pienses, hazlo TICK TOCK
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu Gmail '
            />
            <Button buttonStyle='btn--outline'>Registrate</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre nosotros</h2>
            <Link to='/sign-up'>Cómo funciona</Link>
            <Link to='/'>Testimonios</Link>
            <Link to='/'>Convenios</Link>
            <Link to='/'>Términos de servicio</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactenos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Soporte</Link>
            <Link to='/'>Destinos</Link>
            <Link to='/'>Patrocinios</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Bogota</h2>
            <Link to='/'>Gastronomia</Link>
            <Link to='/'>Lugares</Link>
            <Link to='/'>Historia</Link>
            <Link to='/'>Disfrutar</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Medios Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            
            <Link to='/' className='social-logo' >
          <img src='/images/logo .png' alt='Logo' className='social-logo' />
            BoGallery
          </Link>
          
          </div>
          <small class='website-rights'>BoGallery © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
