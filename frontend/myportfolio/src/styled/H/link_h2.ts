import styled from 'styled-components'

const Link_h2 = styled.h2<{ currentpath:boolean }>`
    font-size: 16px;
    box-sizing: border-box;
    line-height: 39px;
    letter-spacing: 3px;
    width: 170px;
    padding-left: 15px;
    border-radius: 20px;
    margin-bottom: 8px;
    user-select: none;
    background-color: ${(props) => (props.currentpath ? props.theme.link_colors.bg_color : 'transparent')};
    @media (min-width: 751px) {
        &:hover {
            line-height: 31px;
            padding-left: 11px;
            border: 4px solid ${(props)=>(props.theme.link_colors.hover_color)} ;
        }
    }
    @media (max-width: 750px) {
        text-align: center;
        padding-left: 0px;
        &:hover {
            line-height: 31px;
            border: 4px solid ${(props)=>(props.theme.link_colors.hover_color)};
        }
    }
`

export default Link_h2