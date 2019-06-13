import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as ListActions } from '../ducks/list';

export function* getList() {
  try {
    const response = yield call(api.get);

    yield put(ListActions.getListSuccess({ data: response.data.cards }));
  } catch (err) {
    yield put(ListActions.getListFailure());
  }
}
