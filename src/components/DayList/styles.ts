import styled, {css} from "styled-components/native";


export const Container = styled.View`
    //flex: 1;
`

export const HeaderContainer = styled.View`
    min-height: 30px;
`

export const BodyContainer = styled.View`
    //flex: 1;
    min-height: 60px;
    margin-bottom: 20px;
`

export const ItemContainer = styled.View`
   // flex: 1;
    margin-bottom: 10px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.Cores.Gray1};
        font-family: ${theme.FontFamily.Bold};
        font-size: ${theme.FontSize.MD}px;
    `}
`
