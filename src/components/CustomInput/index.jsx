import React from 'react';

export const CustomInput = (props) => {
    const { type, placeholder, value, writedInfo, onClick } = props;
    return (
        <div>
            <input type={type}
                placeholder={placeholder}
                value={value}
                onChange={(event) => writedInfo(event)}
                onClick={() => onClick()}
            />
        </div>
    )
}