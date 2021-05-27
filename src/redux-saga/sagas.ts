import {call, put, takeEvery} from "redux-saga/effects";
import {search, trending} from "../api";
import {HPActions} from "../redux-store/homePageReducer/actions";
import {MultiSearchType} from "../types/response-api.type";
import {selectorDataType} from "../types/homePage/selectorData.type";

export function* popularDataWatcher() {
    yield takeEvery('SET_ASYNC_TRENDING_DATA', trendingDataWorker);
    yield takeEvery('SET_ASYNC_POPULAR_DATA', popularDataWorker);
    yield takeEvery('SET_ASYNC_FEED_DATA', feedDataWorker);
}

//

export function* trendingDataWorker() {
    try {
        const trendingData: MultiSearchType = yield call(fetchTrending);
        yield put(HPActions.setTrendingData(trendingData))
    } catch (e) {
        alert(e)
    }
}

export function* popularDataWorker(action: {type: string, data: selectorDataType}) {
    try{
        const data: MultiSearchType = yield call(fetchHomePageData, action.data);
        yield put(HPActions.setPopularData(data))
    } catch (e) {
        alert(e)
    }

}

export function* feedDataWorker(action: {type: string, data: selectorDataType}) {
    try{
        const data: MultiSearchType = yield call(fetchHomePageData, action.data);
        yield put(HPActions.setMovieFeed(data))
    } catch (e) {
        alert(e)
    }
}

//

export async function fetchHomePageData(data: selectorDataType) {
    if (data.active === "movies") {
        return await search.discoverMovie(data.genres.join(','));
    } else {
        return await search.discoverTV(data.genres.join(','));
    }
}

export async function fetchTrending() {
    return await trending.getTrending();
}


// function* authorize(user, password) {
//     try {
//         const token = yield call(Api.authorize, user, password)
//         yield put({type: 'LOGIN_SUCCESS', token})
//         yield call(Api.storeItem, {token})
//         return token
//     } catch(error) {
//         yield put({type: 'LOGIN_ERROR', error})
//     } finally {
//         if (yield cancelled()) {
//             // ... put special cancellation handling code here
//         }
//     }
// }
//
// function* loginFlow() {
//     while (true) {
//         const {user, password} = yield take('LOGIN_REQUEST')
//         yield fork(authorize, user, password)
//         yield take(['LOGOUT', 'LOGIN_ERROR'])
//         yield call(Api.clearItem, 'token')
//     }
// }