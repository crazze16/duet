import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { onAuth, offAuth } from '../../redux-store/AuthPageReducer'


const User = (props) => {
    const { handleLogout } = props;


    useEffect(() => {
        props.onAuth()
    }, []
    )
    return (
        <section>
            <h2>Welcome</h2>
            <button onClick={() => handleLogout()}>Logout</button>
        </section>
    )
}
const mapStateToProps = (state) => ({
    authFlag: state.AuthPageReducer.isAuth,
})
export const UserContainer = connect(mapStateToProps, { onAuth, offAuth })(User);