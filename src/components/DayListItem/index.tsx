import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Container, ContainerItem, Description, Icon, Pipe, Time } from './styles'


export type DayListItemProps = {
    id: string,
    date:string,
    time: string,
    name: string,
    description: string,
    diet: boolean
}

const DayListItem = ({id, time, name, diet}: DayListItemProps) => {
  
  const navigation = useNavigation();
  
  return (
    <Container onPress={()=> navigation.navigate('MealDetails', {id: id}) }>
        <ContainerItem>
        <Time>{time}</Time>
        <Pipe>  |  </Pipe>
        <Description>{name}</Description>
        </ContainerItem>
        <Icon diet={diet} />
    </Container>
  )
}

export default DayListItem