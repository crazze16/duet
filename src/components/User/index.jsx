import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { onAuth, offAuth } from '../../redux-store/AuthPageReducer'


const User = (props) => {
    const { handleLogout } = props;


    useEffect(() => {
        props.onAuth()
        console.log('bitch')
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
//mapstatetoprops ---> преобразовует данные  из глобального стэйта  в пропс(ы) , мы оборачиваем нашу компоненту в контейнер и конектимся через мапСтэйтТуПропс с глобальным стэйтом

export const UserContainer = connect(mapStateToProps, { onAuth, offAuth })(User);