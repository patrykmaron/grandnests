import styled from 'styled-components'
import Layout from '../components/Layout'
import LandingHero from '../components/LandingHero'

const Main = styled.main`
  background: red;
`

const Footer = styled.footer`
  padding: 2rem;
  background: yellow;
`

export default function Home() {
  return (
    <Layout title="Grand Nests | ">
      <LandingHero></LandingHero>

      <Main>Main sections go here</Main>
      <Footer>Goes here</Footer>
    </Layout>
  )
}
