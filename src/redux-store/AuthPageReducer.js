const ON_AUTH = "ON_AUTH";
const OFF_AUTH = "OFF_AUTH";

let initialState = {
    isAuth: false,

};

const AuthPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_AUTH:
            return { ...state, isAuth: true }

        case OFF_AUTH:
            return { ...state, isAuth: false }

        default:
            return { ...state }

    }
}

export const onAuth = () => ({
    type: ON_AUTH
});

export const offAuth = () => ({
    type: OFF_AUTH
});

export default AuthPageReducer
