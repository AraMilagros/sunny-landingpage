import React from 'react'
import styled from 'styled-components';

import Menu from './components/Menu';
import Header from './components/Header';
import Principal from './page/Principal';
import Clientes from './page/Clientes';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
export default function App() {
    return (
        <Div>
            <Menu />
            <Header />
            <main>
                <Principal />
                <Clientes /> 
                <Galeria />
            </main>
            <Footer />
        </Div>
    )
}

const Div = styled.html`
   position: relative;
`;