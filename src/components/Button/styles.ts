import styled, {css} from "styled-components/native";


type ContainerButtonStyleProps = {
    color?: 'DEFAULT' | 'SECONDARY'
}

export const Container = styled.TouchableOpacity<ContainerButtonStyleProps>`
    height: 50px;
    flex-direction: row;
    background-color: ${({theme,color}) => color === 'DEFAULT'? theme.Cores.Gray2: theme.Cores.White};
    border-radius: 6px;
    border-width: 1px;
    border-color: ${({theme}) => theme.Cores.Gray2};
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    padding: 15px;
`

export const TextButton = styled.Text<ContainerButtonStyleProps>`
    ${({theme, color}) => css`
        color: ${color ==='DEFAULT'? theme.Cores.White: theme.Cores.Gray2};
        font-family: ${theme.FontFamily.Bold};
    `}
`
