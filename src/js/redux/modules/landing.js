import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

import type { landingType } from '../../common/types/landing'

const GET_LANDING = 'app/landing/GET_LANDING'
const UPDATE_LANDING = 'app/landing/UPDATE_LANDING'

export const constants = {
  GET_LANDING,
  UPDATE_LANDING,
}

// ------------------------------------
// Actions
// ------------------------------------
export const getAwesomeCode = createAction(GET_LANDING, () => ({}))
export const updateLanding = createAction(
  UPDATE_LANDING,
  (result: landingType) => ({ result })
)

export const actions = {
  getAwesomeCode,
  updateLanding,
}

export const reducers = {
  [UPDATE_LANDING]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  result: '',
})

export default handleActions(reducers, initialState())
