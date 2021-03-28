import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome} from '@fortawesome/free-solid-svg-icons'


import {} from './styles';
import {NavItemSC} from "./styles";
import {SpanSC} from "./styles";
import {NavSC} from "./styles";


export class Navigation extends React.Component {

    render() {

        return (
            <NavSC>
                {/*<NavItemSC to="/home"><FontAwesomeIcon icon={faHome} color='white' /> <SpanSC>Home</SpanSC></NavItemSC>*/}
                <NavItemSC to="/Vapi"><SpanSC>Main Page</SpanSC></NavItemSC>
                {/*<NavItemSC to="/about"><FontAwesomeIcon icon={faAddressCard} color='white' /><SpanSC> About</SpanSC></NavItemSC>*/}
                <NavItemSC to="/favourite"><SpanSC> Favourite Movies</SpanSC></NavItemSC>
            </NavSC>
        )
    }
}