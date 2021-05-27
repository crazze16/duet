import {all} from 'redux-saga/effects'
import {popularDataWatcher} from "./sagas";
import {headerWatcher} from "./homePage/watchers";
import {chatWatcher} from "./chatPage/sagas";

export function* rootWatcher() {
    yield all([popularDataWatcher(), headerWatcher(), chatWatcher()])
}