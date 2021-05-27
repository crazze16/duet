import {takeEvery} from "redux-saga/effects";
import {feedDataWorker, popularDataWatcher, popularDataWorker, trendingDataWorker} from "./sagas";

describe('fetchAuthorsFromApi', () => {
    const genObject = popularDataWatcher();

    it('should wait for every SET_ASYNC_TRENDING_DATA action and call trendingDataWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeEvery('SET_ASYNC_TRENDING_DATA', trendingDataWorker));
    });
    it('should wait for every SET_ASYNC_POPULAR_DATA action and call trendingDataWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeEvery('SET_ASYNC_POPULAR_DATA', popularDataWorker));
    });
    it('should wait for every SET_ASYNC_FEED_DATA action and call trendingDataWorker', () => {
        expect(genObject.next().value)
            .toEqual(takeEvery('SET_ASYNC_FEED_DATA', feedDataWorker));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
