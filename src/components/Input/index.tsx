import { View, Text } from 'react-native'
import React from 'react'
import { Container, TextInput, Title } from './styles'
import { TextInputProps } from 'react-native'


type InputProps = {
  title: string;
  error?: boolean;
  input?: TextInputProps;

}

const Input = ({title, input, error}: InputProps) => {
  return (
    <Container>
        <Title>{title}</Title>
        <TextInput error={error} {...input} />
    </Container>
  )
}

export default Input