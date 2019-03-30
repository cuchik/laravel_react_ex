import { takeLatest, put } from "redux-saga/effects";
import ActivityStatus from '../../common/enum/activity';
import { FileReaderService } from './services';
import { fileReaderActions } from './actions';
import { FileReaderTypes } from './types';

const service = new FileReaderService

export function* fetchFileReader(action) {
  try {
    yield put(fileReaderActions.loadingActivity(ActivityStatus.Loading,
      FileReaderTypes.FETCH_FILE_READER.LOADING))
      
    const result = yield service.fetchFileReader(action.payload);
    yield put(fileReaderActions.receivedFileReader(result))
  } catch(ex) {
    console.log('error');
    yield put(fileReaderActions.failureFileReader());
  }
}
export function* watchfetchFileReader() {
  yield takeLatest(FileReaderTypes.FETCH_FILE_READER.ROOT, fetchFileReader)
}

export function* fetchDetail(action) {
  try {
    yield put(fileReaderActions.loadingActivity(ActivityStatus.Loading,
      FileReaderTypes.FETCH_DETAIL.LOADING))
      
    const result = yield service.fetchDetail(action.payload);
    if (result.id) {
      yield put(fileReaderActions.receivedDetail(result))
    } else {
      yield put(fileReaderActions.failureDetail());
    }
    
  } catch(ex) {
    console.log('error');
    yield put(fileReaderActions.failureDetail());
  }
}
export function* watchfetchDetail() {
  yield takeLatest(FileReaderTypes.FETCH_DETAIL.ROOT, fetchDetail)
}

export function* uploadFile(action) {
  try {
    yield put(fileReaderActions.loadingActivity(ActivityStatus.Loading,
      FileReaderTypes.UPLOAD_FILE.LOADING))
      
    const result = yield service.uploadFile(action.payload);
    if (result && result[0] !== 'message') {
      yield put(fileReaderActions.receivedUploadFile(result))
      yield put(fileReaderActions.loadingActivity(null, FileReaderTypes.FETCH_FILE_READER.ROOT));
    } else {
      yield put(fileReaderActions.failureUploadFile(result));
    }
  } catch(ex) {
    console.log(ex);
    yield put(fileReaderActions.failureUploadFile(ex));
  }
}
export function* watchUploadFile() {
  yield takeLatest(FileReaderTypes.UPLOAD_FILE.ROOT, uploadFile)
}
