import styled, {css} from "styled-components/native";

type IconStyleProps = {
    diet: boolean
}

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    min-height: 49px;
    border-radius: 6px;
    border-color: ${({theme}) => theme.Cores.Gray4};
    border-width: 1px;
    padding: 15px;
`

export const ContainerItem = styled.View`
    flex-direction: row;
`

export const Time = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FontSize.SM}px;
        font-family: ${theme.FontFamily.Bold};
        color: ${theme.Cores.Gray1};
    `}
`

export const Pipe = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FontSize.SM}px;
        font-family: ${theme.FontFamily.Regular};
        color: ${theme.Cores.Gray3};
    `}
`

export const Description = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FontSize.SM}px;
        font-family: ${theme.FontFamily.Regular};
        color: ${theme.Cores.Gray3};
    `}
`

export const Icon = styled.View<IconStyleProps>`
    border-radius: 6px;
    height: 14px;
    width: 14px;
    background-color: ${({theme, diet}) => diet? theme.Cores.GreenMid: theme.Cores.RedMid };
`