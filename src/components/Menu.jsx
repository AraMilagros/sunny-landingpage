import React from 'react'

import styled from 'styled-components'
import imagen from '../assets/img/desktop/image-header.jpg';
export default function Header() {


  const cerrarAbrirMenu = () => {
    const btn = document.getElementById('icono-menu');


    btn.addEventListener('click', ()=>{
      const menuNav = document.getElementById('id_nav__menu');   
      const idNav = document.getElementById('id_nav');

      if(menuNav.classList.contains('mobile')){
        menuNav.classList.remove('mobile');
        idNav.classList.remove('mobile');
      }else{
        menuNav.classList.add('mobile');
        idNav.classList.add('mobile');
      }
    })
  }

  return (
    <Div>
      <span id='tittle'>sunnyside</span>
      <nav id="id_nav" className='nav'>
        <Ul id="id_nav__menu" className='nav__menu'>
          <li className='menu__item'><a href="#about">About</a></li>
          <li className='menu__item'><a href="#service">Services</a></li>
          <li className='menu__item'><a href="#project">Projects</a></li>
          <li className='menu__item'><a href="#contact">CONTACT</a></li>
        </Ul>
        <div id="icono-menu" className='cerrar' onClick={cerrarAbrirMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </Div>
  )
}

const Div = styled.div`
  background: #3cbcfb;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5em;
  padding: 0 2em;
  font-size: 17px;
  /* position:relative; */

  #tittle{
    font-size: 22px;
    font-weight: 900;
  }

  #icono-menu{
    width: max-content;
    font-size: 1.5em;
  }

  #icono-menu.cerrar{
    display: none;
  }

  @media (max-width: 767px){
    .nav__menu{
      display: none;
    }

    #icono-menu.cerrar{
      display: block;
      padding-right: .1em;
    }

    .nav__menu.mobile{
      display:flex;
      flex-direction: column;
      position: absolute;
      right: 2em;
      top: 6em;
      background: white;

      padding: 1.5em;

    }

    .nav.mobile{
      margin-top: 1.2em;
      

    }

    .nav.mobile::after{
      content: '';
      
      border-left: 1.5em solid transparent;
      border-bottom: 2em solid white;
      

    }

    .nav__menu.mobile .menu__item{
      padding: .5em;

    }
  }

`;

const Ul = styled.ul`
  /* border:2px solid black; */
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5em;

  a{
    text-decoration: none;
    color: white;  
    padding: .5em 2em;
  }

  .menu__item:last-child{

    background: white;
    border-radius: 20px;
    padding: .5em 0;
    cursor: pointer;
    transition: all .5s ease;
  }

  .menu__item:last-child a{
    color:black;
  }

  .menu__item:last-child:hover{
    background:  #5dccfb;
  }

  .menu__item:last-child a:hover{
    color:white;
  }

  
  @media (max-width: 767px){
    a{
      color: black;
    }

    .menu__item:last-child{
      background: #f8aa1b;
      padding: 0;
      margin-top: .5em;
    }
  }


`;