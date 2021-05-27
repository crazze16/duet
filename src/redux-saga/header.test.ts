import {call, put} from "redux-saga-test-plan/matchers";
import {MultiSearchType} from "../types/response-api.type";
import {MovieBySearch} from "../types/shared.type";
import {HPActions} from "../redux-store/homePageReducer/actions";
import {search, trending} from "../api";
import {testSaga} from "redux-saga-test-plan";

function* trendingDataWorker():any {
    try {
        const trendingData: MultiSearchType = yield call(fetchTrending);
        yield put(HPActions.setTrendingData(trendingData))
    } catch (e) {
        alert(e)
    }
}
async function fetchTrending() {
    return await trending.getTrending();
}

let testing = testSaga(trendingDataWorker);
it('trending test', () => {
    testing.next().call(fetchTrending);
    testing.next({type: 'TEST'}).put({type: 'SET_TRENDING_DATA', trendingData: { type: 'TEST' }});
    testing.next().isDone();
});



///////////////////



function* headerWorker(action: {type: string, searchedText: string, page?: number}):any {
    const {searchedText, page} = action;
    try {
        const resultData:MultiSearchType = yield call(fetchData, searchedText, page);
        const filteredResults = {
            ...resultData,
            results: [...resultData.results.filter((item: MovieBySearch) => item.media_type !== 'person')]
        };
        yield put(HPActions.setSearchedResults(filteredResults))
    } catch (e) {
        alert(e)
    }
}

async function fetchData(searchedText: string, page?: number):Promise<MultiSearchType> {
    return await search.multiSearch(searchedText, page);
}


const headerTest = testSaga(headerWorker, {type: 'TEST', searchedText: 'spider', page: 1});
const error = new Error('My Error');
it('header test', () => {
    headerTest.next().call(fetchData, 'spider', 1);
    headerTest.next( {type: 'HEADER'}).put({type: 'TEST', results: {type: 'HEADER'}});
    headerTest.next().isDone();
    // headerTest.next().throw(error)
});
