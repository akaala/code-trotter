import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

const getImageSize = ratio => {
  if (ratio < 1) {
    return css`
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        width: 80%;
      }
    `
  } else {
    return css`
      width: 120%;
      margin-left: -10%;
      height: auto;
      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        width: 100%;
        margin-left: 0;
      }
    `
  }
}

const Image = styled(Img)`
  ${({ ratio }) => getImageSize(ratio)};
  object-fit: cover;
  display: block;
  margin-top: ${({ theme }) => theme.spaces.s1_5};
  > span {
    display: block;
  }
`

export default Image