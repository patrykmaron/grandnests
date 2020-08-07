import * as React from 'react'
import { Tint, Gradient, Wrapper } from './styles'
import SvgDiagonal from '../SvgDiagonal'

type Props = {}

const LandingHero: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <Tint>
      <Gradient></Gradient>
    </Tint>
    <SvgDiagonal side="left" />
    <SvgDiagonal side="right" />
  </Wrapper>
)

export default LandingHero
