import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background: url('/header-background.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 18.5rem;

  display: flex;
  justify-content: center;

  & img {
    margin-top: 4rem;

    height: fit-content;
  }
`
