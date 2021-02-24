import React from 'react';

export const MapNews = (props) => {
    const { title, description } = props;


    return (
        <>
            < div>
                {title}
                <p></p>
                {description}
                <p>---------------------------------------------------------------------------------------------------------</p>
            </div >

        </>
    )
}