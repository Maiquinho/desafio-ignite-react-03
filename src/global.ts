import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }

    body {
        background: ${(props) => props.theme['base-background']};
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
    }

    @media(max-width: 768px){
        html {
            font-size: 87.5%;
        }
    }

`
