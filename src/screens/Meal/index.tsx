import React, { useEffect, useState } from 'react'
import { useForm,Controller, useFieldArray } from "react-hook-form";
import { useNavigation, useRoute } from '@react-navigation/native'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {  Body, Box, BoxQuestion, Container, Footer, Row,Error, RowFlex, TitleQuestion } from './styles'

//components
import Input from '../../components/Input'
import Check from '../../components/Check'
import Button from '../../components/Button'

//repositories and models
import { IMealRepository, MealRepository } from '../../repositories/mealRepository'
import {  MealModel } from '../../repositories/models/meal'
import Header from '../../components/Header';
import { DateHelper } from '../../helpers/date.helper';
import { HeaderHelper } from '../../helpers/header.helper';
import { Alert } from 'react-native';


type MealParamsProps = {
  mode: 'new' | 'edit',
  id?: string
}

const schema = yup.object<MealModel>({
  name: yup.string().required('Please, input a name.'),
  description: yup.string().required('Please, input a description.'),
  date: yup.string().required('Please, input a date.').matches(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/,{message: 'Use DD/MM/YYYY'}),
  time:yup.string().required('Please, input a time.').matches(/[0-9]{2}:[0-9]{2}/, {message: 'Use HH:MM'}),
  diet:yup.boolean().required('Please, choice a diet.')
})

const Meal = () => {

  const [meal, setMeal] = useState<MealModel>();
  const {control,setValue,handleSubmit,formState:{errors}} = useForm<MealModel>({
    resolver: yupResolver(schema)
  });
  
  

  const navigation = useNavigation();
  const route = useRoute();
  const {mode, id} = route.params as MealParamsProps;
  
  const saveHandler = async (meal:MealModel)=>{
     if(mode === 'edit')
       await update(meal);
     else
       await create(meal); 
      navigation.navigate('MealDone', {diet: meal.diet});   
  }

  const update = async(meal:MealModel)=>{
    try{
      const repository:IMealRepository = new MealRepository(); 
      meal.id = id as string;
      await repository.update(meal);
    }catch(error){
      console.log(error);
      Alert.alert('Error','Erro ao tentar atualizar a refeição.');
    }
  }

  const create = async(meal:MealModel) =>{
    try{
      const repository:IMealRepository = new MealRepository(); 
      await repository.create(meal);
    }catch(error){
      console.log(error);
      Alert.alert('Error','Erro ao tentar salvar a refeição.');
    }
  }

  const loadData = async()=>{
    if(id){
      const editMeal = await new MealRepository().find(id as string);
      setMeal(editMeal);
      putData(editMeal);
    }
  }

 const putData = (editMeal: MealModel | undefined)=>{
  setValue("name", editMeal?.name as string);
  setValue("description", editMeal?.description as string);
  setValue("date", editMeal?.date as string);
  setValue("time", editMeal?.time as string);
  setValue("diet", editMeal?.diet as boolean);
 } 

  useEffect(()=>{
      loadData();
  },[])

  return (
    <Container>
      <Header title={HeaderHelper.getTitleDescription(mode)} onPress={() => navigation.navigate('Home') } />
      <Body>
          <Box>
              <Controller
                control={control}
                name='name'
                render={({field:{onChange,onBlur, value}}) => (
                <Input  
                    error={errors.name?true:false}
                    input={{value:value,onChangeText:onChange, onBlur:onBlur}} 
                    title='Nome' />
                )}
              />
              {errors.name && <Error>{errors['name'].message as string}</Error>}
          </Box>
          <Box style={{minHeight: 200}}>
              <Controller
                  control={control}
                  name='description'
                  render={({field:{onChange,onBlur, value}}) => (
                  <Input  
                      error={errors.description?true:false}
                      input={{value:value,onChangeText:onChange, multiline: true}} 
                      title='Description' />
                  )}
                />
                {errors.description && <Error>{errors['description'].message as string}</Error>}
          </Box>
          <Row>
                <RowFlex style={{marginRight: 15, minHeight: 100}}>
                  <Controller
                    control={control}
                    name='date'
                    render={({field:{onChange,onBlur, value}}) => (
                      <>
                        <Input
                            error={errors.date || !DateHelper.isValidDate(value?.toString())?true:false}
                            input={{value:value?.toString(),onChangeText:onChange, maxLength: 10}} 
                            title='Date' />
                        {!DateHelper.isValidDate(value?.toString()) && <Error>Date invalid</Error>}
                      </>
                    )}
                  /> 
                  {errors.date && <Error>{errors['date'].message as string}</Error>}
                </RowFlex>
                <RowFlex>
                  <Controller
                      control={control}
                      name='time'
                      render={({field:{onChange,onBlur, value}}) => (
                        <>
                          <Input  
                            error={errors.time || !DateHelper.isValidTime(value)?true:false}
                            input={{value:value,onChangeText:onChange, maxLength: 5}} 
                            title='Time' />
                          {!DateHelper.isValidTime(value?.toString()) && <Error>Time invalid</Error>}
                        </>
                      )}
                    /> 
                    {errors.time && <Error>{errors['time'].message as string}</Error>}
                </RowFlex>
        </Row>
        <BoxQuestion>
          <TitleQuestion>Está dentro da dienta?</TitleQuestion>
        </BoxQuestion>
        <Row>
        <RowFlex>
            <Controller
                control={control}
                name='diet'
                render={({field:{onChange,onBlur, value}}) => (
                  <Check onChecked={onChange} checked={ value} />
                )}/>
          {errors.diet && <Error>{errors['diet'].message as string}</Error>}
        </RowFlex>
        </Row>
        <Footer>
            <Button onPress={handleSubmit(saveHandler)} title={ id? 'Salvar alterações': 'Cadastrar refeição'} />
        </Footer>
      </Body>
    </Container>
  )
}

export default Meal