import React from 'react'
import { View, Text, ButtonProps, StyleSheet } from 'react-native'
import { Plus,  PencilLine, Trash} from 'phosphor-react-native'
import { Container, TextButton } from './styles'
import { GlobalTheme } from '../../configurations/theme'

type CustomButtonProps = ButtonProps &{
    title: string,
    icon?:  'PLUS' | 'EDIT' | 'DELETE',
    color?: 'DEFAULT' | 'SECONDARY'
}

const Button = ({title,icon, color = 'DEFAULT', ...rest}: CustomButtonProps) => {

  const getIcon = () =>{

    const props = {size: 18, color: color === 'DEFAULT'? GlobalTheme.Cores.White: GlobalTheme.Cores.Gray2 }
    const styles = {marginRight: 6}

     if(icon === 'PLUS') return <Plus style={styles} {...props} />
     if(icon === 'EDIT') return <PencilLine style={styles} {...props}  />
     if(icon === 'DELETE') return <Trash style={styles} {...props} />

     return <></>
  }   

  return (
    <Container color={color} {...rest}>
        {getIcon()}
        <TextButton color={color}>{title}</TextButton>
    </Container>
  )
}

export default Button