import {call, put} from "redux-saga/effects";
import {search} from "api";
import {MovieBySearch} from "types/shared.type";
import {HPActions} from "redux-store/homePageReducer/actions";
import {MultiSearchType} from "types/response-api.type";

export function* headerWorker(action: {type: string, searchedText: string, page?: number}) {
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
