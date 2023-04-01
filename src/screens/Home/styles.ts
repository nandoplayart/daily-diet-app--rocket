import styled,{css} from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin: 25px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FontSize.SM}px;
        font-family: ${theme.FontFamily.Regular};
        color: ${theme.Cores.Gray1};
    `}

`

export const Content = styled.View`
   height: 102px;
   margin-bottom: 25PX;
`

type ContentItemStyleProps = {
    size: number;
}

export const ContentItem = styled.View<ContentItemStyleProps>`
   min-height: ${({size}) => size}px;
   //background-color: red;
   //height: ${({size}) => size}px;
   //overflow: hidden;
`
