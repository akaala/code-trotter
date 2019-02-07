import styled from 'styled-components'
import { Link } from 'atti-components'

import Name from './Name'

const ProfileContainer = styled('div')`
  line-height: 22px;
  margin-left: 30px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 20px;
  }
  ${Link}, ${Name} {
    line-height: 16px;
    font-size: 14px;
  }
  ${Link} {
    display: inline-block;
  }
`

export default ProfileContainer