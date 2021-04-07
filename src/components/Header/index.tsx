import React from 'react';
import {NavItemSC, NavSC, SpanSC} from "./styles";


export const Navigation: React.FC = (props) => {
    return (
        <NavSC>
            {/*<NavItemSC to="/home"><FontAwesomeIcon icon={faHome} color='white' /> <SpanSC>Home</SpanSC></NavItemSC>*/}
            <NavItemSC to="/Vapi"><SpanSC>Main Page</SpanSC></NavItemSC>
            {/*<NavItemSC to="/about"><FontAwesomeIcon icon={faAddressCard} color='white' /><SpanSC> About</SpanSC></NavItemSC>*/}
            <NavItemSC to="/favourite"><SpanSC> Favourite Movies</SpanSC></NavItemSC>
        </NavSC>
    )
};