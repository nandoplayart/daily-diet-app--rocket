import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { GlobalTheme } from '../../configurations/theme'
import {Container, IconBack, Title} from './style'


type HeaderProps = TouchableOpacityProps & {
  title:string,
  mode?: 'Default' | 'Diet' | 'NoDiet'
}

const Header = ({title,mode = 'Default', ...rest}:HeaderProps) => {

  return (
    <Container mode={mode}>
          <TouchableOpacity {...rest} style={{width: '33%'}}>
            <IconBack  color={GlobalTheme.Cores.Gray2} />
          </TouchableOpacity>
            <View style={{width: '34%', justifyContent: 'center'}}>
              <Title>{title}</Title>
            </View>
            <View style={{width: '33%', justifyContent: 'center'}}>
            </View> 
        </Container> 
  )
}

export default Header