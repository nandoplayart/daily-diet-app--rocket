import styled,{css} from 'styled-components/native';
import {ArrowUpRight, ArrowLeft} from 'phosphor-react-native'


export type ContainerStyleProps = {
    mode: 'Diet' | 'Default' | 'NoDiet'
}

export const Container = styled.View<ContainerStyleProps>`
    min-height: 120px;
    padding-left: 25px;
    align-items: center;
    flex-direction: row;
    background-color: ${({theme, mode}) => (
        mode === 'Diet' ?
            theme.Cores.GreenLight: 
        mode === 'NoDiet'? 
            theme.Cores.RedLight:
        theme.Cores.Gray4
    )
    };
`

export const Title = styled.Text`
 ${({theme}) => css`
        font-size: ${theme.FontSize.MD}px;
        font-family: ${theme.FontFamily.Bold};
        color: ${theme.Cores.Gray1};        
    `}
`

export const IconBack= styled(ArrowLeft).attrs({
    size: 24
})`

`