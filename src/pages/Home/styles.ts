import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeWrapper = styled.main`
  max-width: 54rem;
  margin: 0 auto;
`

export const ProfileWrapper = styled.section`
  background: ${(props) => props.theme['base-profile']};

  padding: 2rem 2.5rem;
  margin-top: -5.375rem;

  display: flex;
  gap: 2rem;

  border-radius: 10px;

  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfileAvatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  object-fit: cover;

  border-radius: 8px;
`

export const ProfileInfo = styled.div`
  & p {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-text']};

    margin-top: 0.5rem;
  }

  & footer {
    margin-top: 1.5rem;

    & ul {
      display: flex;
      gap: 1.5rem;

      & li {
        list-style-type: none;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        ${mixins.fonts.textM}
        color: ${(props) => props.theme['base-subtitle']};

        & svg {
          color: ${(props) => props.theme['base-label']};
          line-height: 1.6;
        }
      }
    }
  }
`

export const ProfileHeading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['base-title']};
  }

  & a {
    ${mixins.fonts.link}
    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    & svg {
      color: ${(props) => props.theme.blue};
      line-height: 1.6;
    }
  }
`
