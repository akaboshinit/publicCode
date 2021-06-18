import styled from 'styled-components'

const Title = styled.h3`
    margin: 10px 0;
    position: relative;
    line-height: 1.1;
    font-size: 1.1em;
    padding: 0.4em 1em 0.15em 1em;
    display: inline-block;
    top:0;
    &:before, &:after {
        position: absolute;
        top: 0;
        content:'';
        width: 8px;
        height: 100%;
        display: inline-block;
    }
    &:before {
        border-left: solid 1px black;
        border-top: solid 1px black;
        border-bottom: solid 1px black;
        left: 0;
    }
    &:after {
        content: '';
        border-top: solid 1px black;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
        right: 0;
    }
`

export default Title