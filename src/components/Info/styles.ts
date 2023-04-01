import styled,{css} from "styled-components/native";
import {ArrowUpRight, ArrowLeft} from 'phosphor-react-native'
import { GlobalTheme } from "../../configurations/theme";


export type InfoStyleProps = {
    type: 'PRIMARY'| 'SECONDARY' | 'TERTIARY'
}

export const Container = styled.View<InfoStyleProps>`
    flex: 1;
    background-color: ${({theme, type}) => type ===  'PRIMARY'? 
        theme.Cores.GreenLight : 
        type === 'SECONDARY' ?  theme.Cores.RedLight : theme.Cores.Gray6 };
    border-radius: 6px;
    padding-bottom: 25px;
`

export const InfoHeader = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    max-height: 20px;
`

export const BackHeader = styled.TouchableOpacity`
    flex-direction: row;
    align-items: flex-end;
    padding-left: 20px;
    flex: 1;
`

type InfoBodyStyleProps = {
    addPadding?: boolean
}

export const InfoBody = styled.View<InfoBodyStyleProps>`
    align-items: center;
    flex: 1;
    ${({addPadding}) =>  addPadding && css`
         padding:15px ;
    `}
`

type TitleStyleProps ={
    titleSize: 'XL'| 'XXL'
}

export const Title = styled.Text<TitleStyleProps>`
    font-size: ${({theme, titleSize}) => theme.FontSize[titleSize]}px;
    font-family: ${({theme}) => theme.FontFamily.Bold};
`

export const SubTitle = styled.Text`
    font-size: ${({theme}) => theme.FontSize.SM}px;
    font-family: ${({theme}) => theme.FontFamily.Regular};
    text-align: center;
`

export const IconHeader = styled(ArrowUpRight).attrs({
    size: 24
})`

`

export const IconBack= styled(ArrowLeft).attrs({
    size: 24
})`

`