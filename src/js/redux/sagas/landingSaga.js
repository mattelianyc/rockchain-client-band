import { put, fork, takeLatest } from 'redux-saga/effects'
import {
  constants as landingConstants,
  actions as landingActions,
} from '../modules/landing'

import type { landingType } from '../../common/types/landing'

export function* fetchLandingData() {
  // pretend there is an api call
  const result: landingType = {
    title: 'Everything is Awesome',
    description: __CONFIG__.description,
    source: 'This message is coming from Redux',
  }

  yield put(landingActions.updateLanding(result))
}

function* watchGetLanding() {
  yield takeLatest(landingConstants.GET_LANDING, fetchLandingData)
}

export const landingSaga = [fork(watchGetLanding)]
