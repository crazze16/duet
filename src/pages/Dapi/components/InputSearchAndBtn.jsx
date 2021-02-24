import React, { useRef } from 'react';

export const InputSearchAndBtn = (props) => {
    const { pressBtn } = props;

    let inputValue = useRef();
    return (
        <>
            <input type='text' ref={inputValue} />
            <button onClick={() => pressBtn(inputValue.current.value)}>SEARCH</button>
        </>
    )
}