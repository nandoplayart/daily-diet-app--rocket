import React from 'react'
import { TouchableOpacity } from 'react-native'
import {Container, IconApp, IconAvatar} from './style'

const Header = () => {
  return (
    <Container>
          <TouchableOpacity>
              <IconApp  source={require('../../../assets/logo.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
              <IconAvatar source={require('../../../assets/perfil.png')} />
          </TouchableOpacity>
        </Container> 
  )
}

export default Header