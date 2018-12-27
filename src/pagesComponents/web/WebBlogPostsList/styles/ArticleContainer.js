import styled from 'styled-components'
import { Text } from 'atti-components'

const ArticleContainer = styled('article')`
  margin: 35px 0;
  & + & {
    &:before {
      content: ' ';
      display: block;
      width: 150px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.black};
      margin: 35px auto;
    }
  }
  ${Text} {
    font-size: ${({ theme }) => theme.fonts.fontSize.fs16};;
  }
`

export default ArticleContainer