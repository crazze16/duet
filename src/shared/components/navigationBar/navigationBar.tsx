import React from 'react';
import {LinkContentSC, NavigationContainerSC, NavigationLinkSC } from './navigationBarSC.styles';



export const NavigationBar: React.FC<{navigationVisibility: boolean}> = (props) => {
    return (
        <NavigationContainerSC navigationVisibility={props.navigationVisibility}>
            <NavigationLinkSC to="/home"><LinkContentSC>Home Page</LinkContentSC></NavigationLinkSC>
            <NavigationLinkSC to="/movies"><LinkContentSC>Movies</LinkContentSC></NavigationLinkSC>
            <NavigationLinkSC to="/favourite"><LinkContentSC>Favourite</LinkContentSC></NavigationLinkSC>
        </NavigationContainerSC>
    )
};