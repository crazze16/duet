const ON_AUTH = "ON_AUTH";
const OFF_AUTH = "OFF_AUTH";

type InitialStateType = {
    isAuth: boolean,
}

let initialState: InitialStateType = {
    isAuth: false,

};

const AuthPageReducer = (state:InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ON_AUTH:
            return {...state, isAuth: action.something};

        case OFF_AUTH:
            return {...state, isAuth: false};

        default:
            return {...state}

    }
};

type OnAuthType = {
    type: typeof ON_AUTH
}

export const onAuth = (): OnAuthType => ({type: ON_AUTH});

export const offAuth = () => ({type: OFF_AUTH});

export default AuthPageReducer
