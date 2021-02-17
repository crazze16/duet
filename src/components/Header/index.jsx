import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAltSlash, faUser } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom';



import { HeaderSC, NavSC, LogoSC, HeadLineSC, LogSC, SpanSC } from './styles';


export class Header extends React.Component {

    render() {

        return (
            <HeaderSC>
                <HeadLineSC>
                    <LogoSC>D.V.A.</LogoSC>
                    <LogSC>  <FontAwesomeIcon icon={faUserAltSlash} /> .... <FontAwesomeIcon icon={faUser} /></LogSC></HeadLineSC>
                <NavSC>
                    <NavLink to="/home"><SpanSC>Home</SpanSC></NavLink>
                    <NavLink to="/"><SpanSC>VovaN Api</SpanSC></NavLink>
                    <NavLink to="/"><SpanSC>Dima Api</SpanSC></NavLink>
                    <NavLink to="/"><SpanSC>Alex Api</SpanSC></NavLink>
                    <NavLink to="/"><SpanSC>About</SpanSC></NavLink>

                </NavSC>
            </HeaderSC >
        )
    }
}