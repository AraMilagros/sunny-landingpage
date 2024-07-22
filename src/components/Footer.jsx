import React from 'react'

import styled from 'styled-components'

export default function Footer() {
  return (
    <Div>
      <div>
        <h2>sunnyside</h2>
        <Ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </Ul>
      </div>

      <Iconos>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-pinterest"></i>
      </Iconos>
    </Div>
  )
}

const Div = styled.div`
  /* height: 12em; */
  /* margin: 3.5em 0; */
  padding: 3.5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background: #95d4c5;
  color: #466e62;
  h2{
    font-weight: bold;
    font-size: 28px;
  }
`;

const Ul = styled.ul`
  display: flex;

  li{
    padding: 2.5em 1em;
    transition: all .5s ease;
  }

  li:hover{
    color:white;
    cursor: pointer;
  }
`;

const Iconos = styled.div`

  i{
    padding: 1.1em;
    transition: all .5s ease;
  }

  i:hover{
    color:white;
    cursor: pointer;
  }
`;