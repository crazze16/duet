import React from 'react';
import { RadioWrapperSC } from './selector.styles';
import {SelectorType} from "types/homePage/selector.type";

export const Selector: React.FC<SelectorType> = (props) => {

    const {setType, data, sectionType} = {...props};

    const typeHandler = (value: 'movies' | 'tv') => {
        setType(value)
    };

    return (
        <div>
            <RadioWrapperSC>
                <label htmlFor={`${sectionType}_movie`}>Movies
                    <input id={`${sectionType}_movie`}  type="radio" name={`${sectionType}_type`} value='movies'  onClick={(event) => typeHandler(event.currentTarget.value as 'movies')}  defaultChecked={data.active === 'movies'}/>
                    <span/>
                </label>
            </RadioWrapperSC>
            <RadioWrapperSC>
                <label htmlFor={`${sectionType}_tv`}>Series
                    <input id={`${sectionType}_tv`} type="radio" name={`${sectionType}_type`} value='tv' onClick={(event) => typeHandler(event.currentTarget.value as 'tv')}  defaultChecked={data.active === 'tv'}/>
                    <span/>
                </label>
            </RadioWrapperSC>
        </div>
    )

};

