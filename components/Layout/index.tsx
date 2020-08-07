import * as React from 'react'
import Head from 'next/head'
import { Wrapper } from './styles'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = 'Grand Nests | Default Title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Wrapper>{children}</Wrapper>
  </>
)

export default Layout
