import styled,{css} from "styled-components/native";


export const Container = styled.View`
    flex: 1;
`

export const Error = styled.Text`
 ${({theme}) => css`
        font-size: ${theme.FontSize.SM}px;
        font-family: ${theme.FontFamily.Bold};
        color: ${theme.Cores.RedDark};        
    `}
`

export const Title = styled.Text`
 ${({theme}) => css`
        font-size: ${theme.FontSize.MD}px;
        font-family: ${theme.FontFamily.Bold};
        color: ${theme.Cores.Gray1};        
    `}
`

export const Body = styled.View`
    flex: 1;
    margin-top: -24px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 35px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background-color: ${({theme}) => theme.Cores.White};
`

export const Box = styled.View`
    min-height: 100px;
`

export const Footer = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 20px;
`

export const BoxQuestion = styled.View`
    min-height: 30px;
`

export const TitleQuestion = styled.Text`
 ${({theme}) => css`
        font-size: ${theme.FontSize.SM}px;
        font-family: ${theme.FontFamily.Bold};
        color: ${theme.Cores.Gray1};        
    `}
`

export const Row = styled.View`
    min-height: 75px;
    flex-direction: row;
`

export const RowFlex = styled.View`
    flex: 1;
  
`

