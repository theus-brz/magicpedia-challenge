import { all, takeLatest } from 'redux-saga/effects';

import { Types as ListTypes } from '../ducks/list';
import { getList } from './list';

export default function* rootSaga() {
  return yield all([takeLatest(ListTypes.GET_REQUEST, getList)]);
}
