import styled from 'styled-components'
import Layout from '../components/Layout'

const LandingHero = styled.section`
  height: 100vh;
  background: url('/images/frontpage.webp');
  background-size: fit;
  background-position: 40% 40%;
`
const Tint = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`

const Gradient = styled.div`
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(70, 55, 40, 0.7) 0%,
    rgba(70, 55, 40, 0.69) 1%,
    rgba(125, 185, 232, 0) 100%
  );
`

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
      <style jsx>{`
        .diagonal {
          position: absolute;
          left: 0;
          bottom: 0;
          pointer-events: none;
          background: none;
          float: left;
          z-index: 1000;
          fill: #fff;
          stroke: #fff;
          stroke-width: 4;
        }

        .home-left {
          position: absolute;
          bottom: 0;
          left: 0;
          background: none;
          z-index: 99;
          width: 21vw;
          height: 170px;
          @media (max-width: 768px) {
            width: 41vw;
            height: 85px;
          }
        }

        .home-right {
          position: absolute;
          bottom: 0;
          right: 0 !important;
          background: none;
          z-index: 99;
          left: auto;
          width: 80vw;
          height: 170px;
          @media (max-width: 768px) {
            width: 90vw;
            height: 85px;
          }
        }
      `}</style>
      <LandingHero>
        <Tint>
          <Gradient></Gradient>
        </Tint>
        <svg
          className="diagonal home-left"
          viewBox="0 0 100 102"
          preserveAspectRatio="none"
        >
          <path d="M0 100 L100 100 L0 10 Z"></path>
        </svg>
        <svg
          className="diagonal home-right"
          viewBox="0 0 100 102"
          preserveAspectRatio="none"
        >
          <path d="M-5 100 L100 100 L100 10 Z"></path>
        </svg>
      </LandingHero>

      <Main>Main sections go here</Main>
      <Footer>Goes here</Footer>
    </Layout>
  )
}
