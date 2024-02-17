import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const ArticleWrapper = styled.article`
  background: ${(props) => props.theme['base-post']};

  padding: 2rem;

  border: 2px solid transparent;
  border-radius: 10px;

  transition: 0.2s ease;

  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  & a {
    text-decoration: none;

    &:focus {
      box-shadow: none;
    }
  }

  & p {
    margin-top: 1.25rem;

    display: block;
    display: -webkit-box;
    max-width: 352px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }
`

export const ArticleHeading = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;

  & h3 {
    ${mixins.fonts.titleM}
    color: ${(props) => props.theme['base-title']};
  }

  & time {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme['base-span']};

    white-space: nowrap;
  }
`
