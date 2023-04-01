import styled,{css} from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`


export type CheckQuestionStyleProps = {
    type: 'PRIMARY'| 'SECONDARY' | 'TERTIARY'
}

export const CheckQuestion = styled.TouchableOpacity<CheckQuestionStyleProps>`
    width: 48%;
    height: 50px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    ${({theme, type}) => css`
        background-color: ${type === 'PRIMARY'? theme.Cores.Gray7: 
         type ==='SECONDARY'? theme.Cores.GreenLight: theme.Cores.RedLight};
        border-color: ${type === 'PRIMARY'? theme.Cores.Gray6: type ==='SECONDARY'? 
         theme.Cores.GreenDark: theme.Cores.RedDark};
        border-width: 1px;
    `}
`

export const Title = styled.Text`
     margin-left: 10px;
     ${({theme}) => css`
        font-size: ${theme.FontSize.MD}px;
        font-family: ${theme.FontFamily.Bold};
        color: ${theme.Cores.Gray2};
     `}
`


type IconDietStyleProps = {
    diet?: boolean
}

export const IconDiet = styled.View<IconDietStyleProps>`
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background-color: ${({theme, diet}) => diet? theme.Cores.GreenDark: theme.Cores.RedDark };
`
