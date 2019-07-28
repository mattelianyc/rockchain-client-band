import { all } from 'redux-saga/effects';
import { landingSaga } from './landingSaga';

export default function* sagas() {
  yield all([...landingSaga]);
}
