import React, { useState, useRef, useEffect } from 'react';

import * as axios from "axios";
import { MapNews } from './MapNews';

import { InputSearchAndBtn } from './InputSearchAndBtn'

export const NewsForm = () => {
    const [inputSearch, setInputSearch] = useState('');
    const [data, setData] = useState([]);

    let newFlag = useRef(true);

    const pressBtn = (newValue) => {
        setInputSearch(newValue);
        console.log(data)

    };

    useEffect(() => {
        if (newFlag.current) {
            newFlag.current = false;
        } else {
            axios.get(`http://api.mediastack.com/v1/news?access_key=c5904928010b08dd409a7a8074052197&keywords=${inputSearch}&languages=en`)
                .then(response => setData(response.data.data))

        }
    }, [inputSearch]);

    let resultDraw = data.map((item, index) =>
        <MapNews title={item.title} description={item.description} key={index} />

    );

    return (
        <div>
            <InputSearchAndBtn pressBtn={pressBtn} />

            <div>
                {resultDraw}
            </div>
        </div>
    )

}