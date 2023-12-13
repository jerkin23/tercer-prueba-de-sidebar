import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';
import { IoSearchOutline,IoMailOutline, IoInformationCircleOutline, IoMenuOutline, IoLogOutOutline,  IoDocumentTextOutline, IoPlanetOutline, IoBookOutline } from 'react-icons/io5';
import miImagen from './assets/blank-profile-picture-973460_1280-580x580.jpg';

// instalar los iconos 
//npm install ionicons@7.1.0
// npm install react-icons

const Sidebar = () => {
const [sidebarActive, setSidebarActive] = useState(false);


const handleButtonClick = () => {
setSidebarActive(!sidebarActive);
  };

return (

      <div className='sidebard'>
            <div className={`sidebar ${sidebarActive ? 'active' : ''}`} data-testid="Sidebar">
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
                  <span className="iconos" onClick={handleButtonClick}><IoBookOutline /></span>
                  <span className="titulos"> Notes </span>
                </a>
                <span className='tool'>Notes</span>
              </li>
              <li>
                <a href='#'>
                  <span className="iconos" onClick={handleButtonClick}><IoDocumentTextOutline /></span>
                  <span className="titulos">User Manual </span>
                </a>
                <span className='tool'>Manual</span>
              </li>
              <li>
                <a href='#'>
                  <span className="iconos" onClick={handleButtonClick}><IoInformationCircleOutline/></span>
                  <span className="titulos"> contacts </span>
                </a>
                <span className='tool'>Contacts</span>
              </li>
              <li>
                <a href='#'>
                  <span className="iconos" onClick={handleButtonClick}><IoMailOutline /></span>
                  <span className="titulos"> About us </span>
                </a>
                <span className='tool'>About us</span>
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


                </div>
                <span className='logout'><IoLogOutOutline /></span>
              </div>
            </div>
          </div>
        </div>


            <div className='home'>
          <div className='textoPrueba'
          
          
          
          >home content
          
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
