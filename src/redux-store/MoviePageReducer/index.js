const SAY_DIMA_NAME = 'SAY_DIMA_NAME';

let initialState = {
    name: 'Dima',
    data: [
        {},
        {},
    ]
};

const MoviePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAY_DIMA_NAME:
            return {...state, name: action.name};
        default:
            return {...state};
    }
};

export const sayNameActionCreator = (name) => ({type: SAY_DIMA_NAME, name});
//action creator
//action - объект у которого 100% должен быть ключ type = string

export default MoviePageReducer