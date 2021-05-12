import React from 'react';
import {LinkContentSC, NavigationContainerSC, NavigationLinkSC } from './navigationBarSC.styles';



export const NavigationBar: React.FC = (props) => {
    return (
        <NavigationContainerSC>
            <NavigationLinkSC to="/movies"><LinkContentSC>Main Page</LinkContentSC></NavigationLinkSC>
            <NavigationLinkSC to="/favourite"><LinkContentSC> Favourite Movies</LinkContentSC></NavigationLinkSC>
        </NavigationContainerSC>
    )
};