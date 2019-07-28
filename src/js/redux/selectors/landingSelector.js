import { createSelector } from 'reselect'

const landingDataSelector = (state) => state.landing

const resultSelector = createSelector(
  landingDataSelector,
  (payload) => payload.get('result')
)

export const landingSelector = (state) => ({
  result: resultSelector(state),
})
