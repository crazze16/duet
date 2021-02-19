import React, { useEffect } from 'react';



export const User = (props) => {
    const { handleLogout, onclick } = props;


    useEffect(() => {
        onclick();
    }, []
    )
    return (
        <section>
            <h2>Welcome</h2>
            <button onClick={() => handleLogout()}>Logout</button>
        </section>
    )
}