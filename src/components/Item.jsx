import React, { useState } from 'react'
import styled from 'styled-components'

const desktop = require.context('../assets/img/desktop', true);
const mobile = require.context('../assets/img/mobile', true);
{/* <img className="experience__img" src={logo(props.logo)} alt="logo-projects" /> */ }


export default function Item(props) {
  console.log(props.bandera);


  return (
    <Div className='container__item'>
      <div className='item item__text'>
        <h2 className='item__tittle'>{props.titulo}</h2>
        <p>{props.descripcion}</p>
        <BtnLearn>LEARN MORE</BtnLearn>
      </div>
      <div className='item'>
        <img src={desktop(props.img)} alt="" />
      </div>
    </Div>
  )
}

const Div = styled.div`
    display: flex;

  &:nth-child(even){
    flex-direction: row-reverse;
  }

  .item{
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }

  h2{
    display: block;
    /* border:2px solid red; */
    font-size: 2em;
    width: 250px;
    margin-bottom: 1em;
  }
  p{
    /* border:2px solid blue; */
    width: 50%;
    margin-bottom: 1em;
  }

  h2, p, label{
    margin-left: 20%;
  }

  .item img{
    max-width: 100%;

  }
  .container{
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 767px){
    .item__text{
      /* border:2px solid red; */
      padding: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    h2, p, label{
      margin-left: 0;
    }

  }


`;

const BtnLearn = styled.button`
  background: none;
  outline: none;
  font-weight: bold;
  width: max-content;
  margin-left: 20%;
  border: none;
  transition: all .5s ease;

  &::after{
    content:'';

    height: 10px;
    width: 100px;
    display: block;
    border-radius: 50px;
    margin-top: -8px;
    background-color: #f8aa1b;
  }

  &:hover{
    cursor: pointer;
  }

  @media (max-width: 767px){
    margin-left: 0;
  }
  
`;