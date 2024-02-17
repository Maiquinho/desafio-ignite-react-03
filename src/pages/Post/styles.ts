import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostWrapper = styled.main`
  max-width: 54rem;
  margin: 0 auto;

  padding-bottom: 8rem;
`

export const PostInfoWrapper = styled.section`
  background: ${(props) => props.theme['base-profile']};

  padding: 2rem 2.5rem;
  margin-top: -5.375rem;

  display: flex;
  gap: 2rem;

  border-radius: 10px;

  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`

export const PostInfoHeading = styled.header`
  flex: 1;

  & h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['base-title']};

    margin-top: 1.25rem;
  }

  & footer {
    margin-top: 0.5rem;

    & ul {
      display: flex;
      gap: 2rem;

      & li {
        list-style-type: none;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        ${mixins.fonts.textM}
        color: ${(props) => props.theme['base-span']};

        & svg {
          color: ${(props) => props.theme['base-label']};
          line-height: 1.6;
        }
      }
    }
  }
`

export const PostInfoBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    ${mixins.fonts.link}
    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
