import styled,{ css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
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

export const Title = styled.Text`
 ${({theme}) => css`
        font-size: ${theme.FontSize.LG}px;
        font-family: ${theme.FontFamily.Bold};
        color: ${theme.Cores.Gray1}; 
        margin-bottom: 5px;
    `}
`

type SubTitleStyleProps = {
    bold?: boolean
}

export const SubTitle = styled.Text<SubTitleStyleProps>`
 ${({theme,bold}) => css`
        font-size: ${theme.FontSize.SM}px;
        font-family: ${bold? theme.FontFamily.Bold: theme.FontFamily.Regular};
        color: ${theme.Cores.Gray1};  
        margin-bottom: 10px;
    `}
`
export const Footer = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 20px;
`

export const CenteredModal = styled.View`
    flex: 1;    
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.Cores.Gray6};
    opacity: 0.8;
`

export const BodyModal = styled.View`
  width: 95%;
  flex-direction: row;
  margin-top: 20px;
`
export const ContentBoxModal = styled.View`
  flex: 1;
`

export const ViewModal =  styled.View`
    background-color: white;
    border-radius: 10PX;
    padding: 20px;
    margin: 20px;
`

export const HeaderModal = styled.View`
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    
`

