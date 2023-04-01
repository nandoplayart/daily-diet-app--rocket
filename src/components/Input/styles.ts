import styled,{css} from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    margin-bottom: 20px;
`

export const Title = styled.Text`
 ${({theme}) => css`
        font-size: ${theme.FontSize.MD}px;
        font-family: ${theme.FontFamily.Regular};
        color: ${theme.Cores.Gray1}; 
        margin-bottom:  5px;
    `}
`

type TextInputStyleProps = {
    error?: boolean,
    multiline?:boolean
}

export const TextInput = styled.TextInput<TextInputStyleProps>`
     ${({theme, error, multiline}) => css`
        border-radius: 6px;
        border-color: ${error ? theme.Cores.RedDark: theme.Cores.Gray5};  
        border-width: 1px;
        min-height: ${multiline? 150: 48}px;
        font-size: ${theme.FontSize.MD}px;
        padding-left: 15px;
    `}
`