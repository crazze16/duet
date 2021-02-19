import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAltSlash, faUser, faHome, faAddressCard } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom';



import { HeaderSC, NavSC, LogoSC, HeadLineSC, LogSC, SpanSC } from './styles';


export class Header extends React.Component {

    render() {

        return (
            <HeaderSC>
                <HeadLineSC>
                    <LogoSC>D.V.A</LogoSC>
                    <LogSC>
                        {/* <FontAwesomeIcon icon={faUserAltSlash} /> */}
                        <NavLink to="/Auth"><FontAwesomeIcon icon={faUser} color="#fff" /></NavLink>

                    </LogSC>
                </HeadLineSC>
                <NavSC>
                    <NavLink to="/home"><FontAwesomeIcon icon={faHome} color='white' /> <SpanSC>Home</SpanSC></NavLink>
                    <NavLink to="/Vapi"><SpanSC>VovaN Api</SpanSC></NavLink>
                    <NavLink to="/Dapi"><SpanSC>Dima Api</SpanSC></NavLink>
                    <NavLink to="/Aapi"><SpanSC>Alex Api</SpanSC></NavLink>
                    <NavLink to="/About"><FontAwesomeIcon icon={faAddressCard} color='white' /><SpanSC> About</SpanSC></NavLink>

                </NavSC>
            </HeaderSC >
        )
    }
}