import styled from 'styled-components'

const H1 = styled.h1`
    color: ${(props) => (props.theme.colors.main)};
    font-size: 1.5em;
    font-family: 'Noto Sans Japanese,Roboto Condensed, sans-serif';
    line-height: 20px;
    font-weight: normal;
    margin-top: 10px;
`

export default H1