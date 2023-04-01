import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Container, Content, Header, Title } from './styles'
import Info from '../../components/Info'
import { MealRepository } from '../../repositories/mealRepository'
import { MealModel } from '../../repositories/models/meal'
import { FormatResult, StatisticHelper } from '../../helpers/statistc.helper'
const Dashboard = () => {

  const [meals, setMeals] = useState<MealModel[]>();  
  const [percentagemResult, setPercentagemResult] = useState<FormatResult>(new FormatResult(0,'0,00%'));
 

  const loadData = async() =>{
    const loadedMeals = await new MealRepository().listAll();
    const result =  StatisticHelper.getPercentagemDiet(loadedMeals);
    setPercentagemResult(result);
    setMeals(loadedMeals);
  }  

  useEffect(() =>{
    loadData();
  },[])  

  return (
    <Container>
        <Header>
            <Info 
                showIconBack
                showIcon={false} 
                type={percentagemResult.result >= 50? 'PRIMARY': 'SECONDARY' }
                title={percentagemResult.formatResult} 
                subtitle='das refeições dentro da dieta'  />
        </Header>
        <Content>
                <Title>Estatistica gerais</Title>
        </Content>
        <Box>
            <Info 
                type='TERTIARY' 
                title={StatisticHelper.getSequenceDiet(meals)?.toString() as string} 
                titleSize='XL'
                showIcon={false} 
                subtitle='melhor sequencia de pratos dentro da dieta' />
        </Box>
        <Box>
            <Info 
                type='TERTIARY' 
                title={meals?.length.toString() as string} 
                titleSize='XL'
                showIcon={false} subtitle='refeições registradas' />
        </Box>
        <Box style={{flexDirection: 'row'}}>
            <View style={{width: '48%'}}>
                <Info      
                        title={StatisticHelper.getMealsDiet(meals).toString()}
                        titleSize='XL'
                        showIcon={false} 
                        subtitle='refeições dentro da dienta' />
            </View>
            <View style={{width: '48%', marginLeft: '4%'}}>
                <Info 
                    type='SECONDARY'   
                    title={StatisticHelper.getMealsNoDiet(meals).toString()}
                    titleSize='XL'
                    showIcon={false} 
                    subtitle='refeições fora da dienta' />
            </View>
        </Box>
    </Container>
  )
}

export default Dashboard