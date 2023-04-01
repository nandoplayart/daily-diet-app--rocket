import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import { BodyContainer, Container,HeaderContainer, ItemContainer, Title } from './styles'
import DayListItem, { DayListItemProps } from '../DayListItem'
import { DateHelper } from '../../helpers/date.helper'





type DayListProps = {
    data: string;
    items: DayListItemProps[];
}


const DayList = ({data, items}: DayListProps) => {


  const renderItem =  (item:DayListItemProps)=>{
      return  <DayListItem key={item.id} {...item}  />
  }

  return (
    <Container>
        <HeaderContainer>
        <Title>{DateHelper.getFormateDateDisplayList(data)}</Title>     
        </HeaderContainer>
        <BodyContainer>           
            {items.map(item => <ItemContainer key={item.id}>{renderItem(item)}</ItemContainer> )}
        </BodyContainer>  
    </Container>
  )
}

export default DayList