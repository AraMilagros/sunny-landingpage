import React from 'react'
import styled from 'styled-components'

import imgPC from '../assets/img/desktop/image-header.jpg';

export default function Header() {
  return (
    <Div>
        <div className='header__text'>
            <h1 className='header__tittle'>WE ARE CREATIVES</h1>
            <i className="icon-arrow fa-solid fa-arrow-down-long"></i>
        </div> 
        <img className="header__img" src={imgPC} alt="header img" />
    </Div>
  )
}

const Div = styled.div`
    position: relative;
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    z-index: -10;
    .header__tittle{
        font-size: 3em;
        letter-spacing: .5cap;
    }

    .header__text{
        text-align: center;
        position: absolute;
        color: white;
        height: 17em;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 7em;
    }

    .icon-arrow{
        font-size: 6em;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    @media (max-width: 767px){

        .header__tittle{
            font-size: 2em;
        }
        .header__text{
            height: 15em;
        }
    }

    @media (max-width: 320px){
        .header__text{
            height: 13em;
        }
    }

`;

// @media (max-width: 767px){