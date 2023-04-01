import styled,{css} from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`

export const Content = styled.TouchableOpacity`
    width: 42%;
    height: 40px;
    border-radius: 26px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    ${({theme}) => css`
        background-color: ${ theme.Cores.Gray7};
    `}
`

export const Title = styled.Text`
     margin-left: 10px;
     ${({theme}) => css`
        font-size: ${theme.FontSize.SM}px;
        font-family: ${theme.FontFamily.Regular};
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
