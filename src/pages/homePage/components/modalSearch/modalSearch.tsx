import React from 'react';
import { NavLink } from 'react-router-dom';
import {DateSC, TitleSC, TypeSC, VoteSC, WrapperSC } from './modalSearch.styles';
import {PropsType} from "types/homePage/modalSearchElement.type";

export const ModalSearchElement: React.FC<PropsType> = (props) => {

    const {title, type, date,vote, id} = props;

    return (
        <WrapperSC>
           <div>
               <TitleSC>
                   <NavLink to={`/movie/${id}`}>
                       {title}
                   </NavLink>
               </TitleSC>
               <VoteSC>
                   {vote}
               </VoteSC>
           </div>
            <div>
                <DateSC>
                    {date && date.slice(0,4)}
                </DateSC>
                <TypeSC>
                    {type}
                </TypeSC>
            </div>
        </WrapperSC>
    )
};