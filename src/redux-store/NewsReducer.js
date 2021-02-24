const SET_NEWS = 'SET_NEWS';

let initialState = {
    newsData: []
};

// action - обьект у которого type - это строка на которую смотрит reducer, что бы выполнить определенное действие
const NewsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return { ...state, newsData: action.newNewsData }
        default:
            return { ...state }
    }

}
//action creator
export const setNewsAC = (newNewsData) => ({
    type: SET_NEWS,
    newNewsData
})


export default NewsPageReducer;