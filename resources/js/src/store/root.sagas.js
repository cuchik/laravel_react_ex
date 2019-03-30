import { all, fork } from "redux-saga/effects";

import { watchfetchFileReader, watchUploadFile, watchfetchDetail } from '../containers/file-reader/sagas'

export function* rootSaga() {
  yield all([
    fork(watchfetchFileReader),
    fork(watchUploadFile),
    fork(watchfetchDetail),
  ])
}