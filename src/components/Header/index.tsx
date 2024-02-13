import { HeaderWrapper } from './styles'

import logo from '../../../public/logo.svg'

export function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} alt="logo do github blog" />
    </HeaderWrapper>
  )
}
