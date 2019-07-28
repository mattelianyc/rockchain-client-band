import React from 'react'
import Enzyme, { shallow } from 'enzyme'

import { Landing } from  '../../../src/js/common/components/Landing'

const fixture = {
  landing: {
    result: {
      testing: 'data',
    },
  },
};

describe('LandingView', () => {
  it('should render a blank div without data', () => {
    const el = shallow(<Landing />)

    expect(el.length).toEqual(1)
    expect(el.find('.landingOutput').length).toEqual(0)
  })

  it('should render with correct data', () => {
    const el = shallow(
      <Landing {...fixture} />
    )

    expect(el.length).toEqual(1)
    expect(el.find('.landingOutput').length).toEqual(1)
  })
})
