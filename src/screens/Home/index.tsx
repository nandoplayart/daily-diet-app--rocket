import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity } from 'react-native'
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native'

import { Container,Content,ContentItem,Title } from './styles'

//componentes
import Info from '../../components/Info'
import Button from '../../components/Button'
import DayList from '../../components/DayList'

import Header from './Header'
import { MealRepository } from '../../repositories/mealRepository'
import { MealModel } from '../../repositories/models/meal'
import { FormatResult, StatisticHelper } from '../../helpers/statistc.helper'
import { DateHelper } from '../../helpers/date.helper'

const Home = () => {

  const [meals,setMeals]  = useState<MealModel[]>([]);
  const [dates,setDates] = useState<string[]>([]);
  const [percentagemResult, setPercentagemResult] = useState<FormatResult>(new FormatResult(0,'0,00%'));
  const navigation = useNavigation();  
  const isFocused = useIsFocused();

  // useFocusEffect(useCallback(()=>{
  //   loadData();
  // },[isFocused]));


  const loadData = async() =>{
    const data = await new MealRepository().listAll();
    const result =  StatisticHelper.getPercentagemDiet(data);
    setPercentagemResult(result);
    setMeals(data);
}

  const getDistinctDates = ()=>{
    return Array.from(new Set(meals.map(meal => meal.date)));
  }

  const renderItem = (item:string)=>{
    const items = meals?.filter(meal => meal.date === DateHelper.getRevertFormateDate(item));
    return  <DayList key={item} data={item} items={items} />
  }

  useEffect(()=>{
    loadData();
  },[isFocused]);

  return (
    <Container>
        <Header />
        <Content>
            <TouchableOpacity style={{flex: 1}} onPress={()=> navigation.navigate('Dashboard') }>
                <Info 
                    showIcon 
                    type={percentagemResult.result >= 50? 'PRIMARY': 'SECONDARY'}
                    title={percentagemResult.formatResult} 
                    subtitle='das refeições dentro da dieta'  /> 
            </TouchableOpacity>
        </Content>
        <Title>Refeições</Title>
        <Button onPress={()=> navigation.navigate('Meal',{mode: 'new' })} title='Nova refeição' icon='PLUS' />
        <FlatList style={{flex:1 , marginTop: 15}}
          data={getDistinctDates()}
          extraData={isFocused}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({item}) => renderItem(item)}
          />
        
        
    
    </Container>
  )
}

export default Home