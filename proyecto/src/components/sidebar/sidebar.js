import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import { IoSearchOutline, IoMenuOutline, IoLogOutOutline,  IoDocumentTextOutline, IoPlanetOutline, IoBookOutline } from 'react-icons/io5';
import miImagen from './assets/blank-profile-picture-973460_1280-580x580.jpg';

const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleButtonClick = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className={`sidebar ${sidebarActive ? 'active' : ''}`} data-testid="Sidebar">
      <div className='sidebard'>
        <div className='contenido'>
          <div className='logo'>
            <span className='icono'><IoPlanetOutline /></span>
            <div className='nombre'>
              <span className="titulo">Notes En Linea </span>
            </div>
            
          </div>
          <div className='navegacion'>
          <span className='btn' onClick={handleButtonClick}><IoMenuOutline /></span>
            <ul>
              <li>
                <a href='#'>
                  <span className="lupa" onClick={handleButtonClick}><IoSearchOutline /></span>
                  <input type='text' placeholder="Search.." />
                </a>
                <span className='tool'>Search</span>
              </li>
              <li>
                <a href='#'>
                  <span className="iconos" onClick={handleButtonClick}><IoBookOutline /></span>
                  <span className="titulo"> Notes </span>
                </a>
                <span className='tool'>Notes</span>
              </li>
              <li>
                <a href='#'>
                  <span className="iconos" onClick={handleButtonClick}><IoDocumentTextOutline /></span>
                  <span className="titulo">User Manual </span>
                </a>
                <span className='tool'>Manual</span>
              </li>
            </ul>
            <div className="salir">
              <div className="perfil">
                <div className="perfil2">
                  <img src={miImagen} alt="" />
                  <div className="detalles">
                    <div className="cierre">Sign Out</div>
                    <div className="despedida">Thank you for visiting us</div>
                  </div>
                  <span className='logout' onClick={handleButtonClick}><IoLogOutOutline /></span>
                </div>
              </div>
            </div>
            <div className='home'>
              <div className='textoPrueba'>home content</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
