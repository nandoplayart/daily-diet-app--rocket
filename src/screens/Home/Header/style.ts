import styled,{css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
min-height: 55px;
flex-direction: row;
justify-content: space-between;
margin-bottom: 25px;
`

export const IconApp = styled.Image`
 

`

export const IconAvatar = styled.Image`
    width: 55px;
    height: 55px;
    border-radius: 25px;
    border-color: ${({theme}) => theme.Cores.Gray2  };
    border-width: 2px;
`
