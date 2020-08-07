import styled from 'styled-components'

type Props = {
  side: string
}

export const Svg = styled.svg<Props>`
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
  ${(props) =>
    props.side === 'left'
      ? `position: absolute;
  bottom: 0;
  left: 0;
  background: none;
  z-index: 99;
  width: 21vw;
  height: 170px;
  @media (max-width: 768px) {
    width: 41vw;
    height: 85px;
  }`
      : `position: absolute;
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
  }`}
`
