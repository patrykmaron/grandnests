import React from 'react'
import { render } from '../testUtils'
import Home from '../../pages/index'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('Home page', () => {
  it('matches snapshot and renders', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
