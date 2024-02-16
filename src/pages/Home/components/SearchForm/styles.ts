import styled from 'styled-components'

export const SearchFormWrapper = styled.form`
  margin-top: 0.75rem;

  display: flex;

  & input {
    flex: 1;

    background: ${(props) => props.theme['base-input']};

    color: ${(props) => props.theme['base-text']};

    padding: 0.75rem 1rem;

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
