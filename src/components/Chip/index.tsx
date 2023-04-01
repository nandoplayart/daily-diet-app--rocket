import { View, Text } from 'react-native'
import React from 'react'
import { Content, Container, IconDiet, Title } from './styles'

type ChipProps = {
    diet: boolean,
    title: string
}

const Chip = ({diet, title}: ChipProps) => {
  return (
    <Container>
        <Content>
            <IconDiet diet={diet} />
            <Title>{title}</Title>
        </Content>
    </Container>
  )
}

export default Chip