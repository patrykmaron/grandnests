import styled from 'styled-components'

export const Wrapper = styled.section`
  height: 100vh;
  background: url('/images/frontpage.webp');
  background-size: cover;
  @media (max-width: 768px) {
    background-size: unset;
    background-position: 40% 40%;
  }
`
export const Tint = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`

export const Gradient = styled.div`
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(70, 55, 40, 0.7) 0%,
    rgba(70, 55, 40, 0.69) 1%,
    rgba(125, 185, 232, 0) 100%
  );
`
