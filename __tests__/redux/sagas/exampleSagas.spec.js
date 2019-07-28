import { put } from 'redux-saga/effects'
import { fetchLandingData } from '../../../src/js/redux/sagas/landingSaga'
import { actions as landingActions } from '../../../src/js/redux/modules/landing'

describe('redux.sagas.landingSaga', () => {
  describe('fetchLandingData', () => {

    global.__CONFIG__ = {
      description: 'fake description'
    }

    const fixture = {
        title: 'Everything is Awesome',
        description: __CONFIG__.description,
        source: 'This message is coming from Redux',
      };

    it('should call landingActions.updateLanding with correct data', () => {
      const generator = fetchLandingData()

      let next = generator.next()

      expect(next.value).toEqual(put(landingActions.updateLanding(fixture)))
    })
  })
})
