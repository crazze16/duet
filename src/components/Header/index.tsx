import React from 'react';
import {NavItemSC, NavSC, SpanSC} from "./styles";


export const Navigation: React.FC = (props) => {
    return (
        <NavSC>
            <NavItemSC to="/Vapi"><SpanSC>Main Page</SpanSC></NavItemSC>
            <NavItemSC to="/favourite"><SpanSC> Favourite Movies</SpanSC></NavItemSC>
        </NavSC>
    )
};