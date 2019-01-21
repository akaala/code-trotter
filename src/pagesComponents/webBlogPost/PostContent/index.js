import styled from 'styled-components'
import { 
  Header2 as AttiHeader2, 
  Header3 as AttiHeader3,
  Image as AttiImage,
  Link as AttiLink, 
  Text as AttiText
} from 'atti-components'


const Header2 = styled(AttiHeader2)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 35px auto 10px auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const Header3 = styled(AttiHeader3)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 35px auto 10px auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const Image = styled(AttiImage)`
  width: ${({ theme }) => theme.webBlogPost.extendedWidth};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const Link = styled(AttiLink)`
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
`

const List = styled(AttiText.withComponent('ul'))`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 15px auto 10px auto;
  display: block;
  list-style-type: disc;
  padding-left: 40px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const ListItem = styled(AttiText.withComponent('li'))`
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
  display: list-item;
`

const Separator = styled('hr')`
  width: 30%;
  margin: 30px auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 50%;
  }
`

const Strong = styled('strong')`
  font-weight: bold;
`

const Text = styled(AttiText)`
  display: block;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: auto;
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const Blockquote = styled('blockquote')`
  display: flex;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 10px auto 10px auto;
  &:before {
    content: ' ';
    display: block;
    width: 5px;
    margin-right: 10px;
    background-color: ${({ theme }) => theme.colors.smoke};
  }
  
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }

  > ${Text} {
    width: 100%;
  }
`

export {
  Blockquote,
  Header2,
  Header3,
  Image,
  Link,
  List,
  ListItem,
  Separator,
  Strong,
  Text,
}