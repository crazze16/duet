import { takeEvery } from "redux-saga/effects";
import {headerWorker} from "./workers";

export function* headerWatcher() {
    yield takeEvery('HEADER_ASYNC_SEARCH', headerWorker)
}
