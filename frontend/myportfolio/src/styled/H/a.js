import styled from 'styled-components'

const A = styled.a`
    color: ${(props) => (props.theme.colors.main)};
    padding: 0px;
    margin: 0px;
    height: 30px;
    text-decoration: none;
    &:hover {
        color: ${(props) => (props.theme.colors.hover)};
    }
`

export default A