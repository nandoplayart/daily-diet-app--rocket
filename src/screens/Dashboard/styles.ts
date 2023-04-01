import styled,{css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.Cores.White};
`

export const Header = styled.View`
    height: 200px;
`

export const Content = styled.View`
    background-color: ${({theme}) => theme.Cores.White};
    border-top-right-radius: 36px;
    border-top-left-radius: 36px;
    margin-top: -24px;
    justify-content: center;
    align-items: center;
    padding: 25px;
`

export const Box = styled.View`
    min-height: 100px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 15px;
`

export const Row = styled.View`
    flex-direction: row;
`

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.Cores.Gray1};
        font-size: ${theme.FontSize.MD}px;
        font-family: ${theme.FontFamily.Regular};
    `}
`

