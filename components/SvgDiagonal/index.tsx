import * as React from 'react'
import { Svg } from './styles'

type Props = {
  primary?: boolean
  side: string
}

const SvgDiagonal: React.FC<Props> = ({ children, primary = false, side }) => {
  if (side === 'left') {
    return (
      <Svg viewBox="0 0 100 102" preserveAspectRatio="none" side={side}>
        <path d="M0 100 L100 100 L0 10 Z"></path>
      </Svg>
    )
  } else if (side === 'right') {
    return (
      <Svg viewBox="0 0 100 102" preserveAspectRatio="none" side={side}>
        <path d="M-5 100 L100 100 L100 10 Z"></path>
      </Svg>
    )
  }
}

export default SvgDiagonal
