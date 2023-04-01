import styled,{css} from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 35px;
`


type TitleStyleProps = {
    diet: boolean
}

export const Title = styled.Text<TitleStyleProps>`
    ${({theme, diet}) => css`
        font-size: ${theme.FontSize.XL}px;
        font-family: ${theme.FontFamily.Bold};
        color: ${diet?theme.Cores.GreenDark: theme.Cores.RedDark};
     `}
`


type SubtitleStyleProps = {
    bold?: boolean
}

export const Subtitle= styled.Text<SubtitleStyleProps>`
${({theme, bold}) => css`
    font-size: ${theme.FontSize.MD}px;
    font-family: ${bold?theme.FontFamily.Bold:theme.FontFamily.Regular};
    color: ${theme.Cores.Gray3};
    text-align: center;
 `}
`