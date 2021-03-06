import styled from 'styled-components'
import { Header1 } from 'atti-components'

const ArticleTitle = styled(Header1)`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  &:after {
    content: ' ';
    display: block;
    width: 150px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.black};
    margin: ${({ theme }) => theme.spaces.s2} auto;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 40px;
    line-height: 48px;
  }
`

export default ArticleTitle