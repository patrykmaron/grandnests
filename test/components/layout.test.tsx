import React from 'react'
import { render } from '../testUtils'
import Layout from '../../components/Layout'
import { cleanup, waitFor } from '@testing-library/react'

afterEach(cleanup)

describe('Layout component', () => {
  it('matches snapshot and renders', () => {
    const { asFragment } = render(<Layout />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
