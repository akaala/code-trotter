import styled from 'styled-components'
import { Container, Header1 } from 'atti-components'

const HeaderTextContainer = styled(Container)`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 300px 0;
  
  ${Header1} {
    ${({theme}) => `
      color: ${theme.colors.snow};
      font-size: ${theme.fonts.fontSize.fs48};
      line-height: ${theme.fonts.lineHeight.lh56};
      font-weight: ${theme.fonts.fontWeight.fw700};
      margin-bottom: ${theme.spaces.s3};
    `}
    text-transform: uppercase;
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 200px 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 150px 0;
  }
`

export default HeaderTextContainer