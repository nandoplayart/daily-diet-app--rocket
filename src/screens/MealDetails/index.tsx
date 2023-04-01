import { Modal, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Body, CenteredModal, Container, Footer, SubTitle, Title, ViewModal, ContentBoxModal, HeaderModal, BodyModal } from './styles'
import Header from '../../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MealModel } from '../../repositories/models/meal'
import { MealRepository } from '../../repositories/mealRepository'
import Chip from '../../components/Chip'
import Button from '../../components/Button'


type MealDetailsRoute = {
  id:string
}

const MealDetails = () => {

  const [meal,setMeal] = useState<MealModel>();
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const {id} = route.params as MealDetailsRoute;

  const loadData = async() =>{
    const viewMeal = await new MealRepository().find(id);
    setMeal(viewMeal);
  }

  const deleteHandler = async()=>{
        try {
            await new MealRepository().delete(id);
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error','Erro ao tentar excluir');
        }    
  }

  useEffect(()=>{
    loadData();
  },[])

  return (
    <Container>
        <Header mode={meal?.diet? 'Diet': 'NoDiet'} title='Refeição' onPress={() => navigation.navigate('Home') } />
        <Body>
            <Title>{meal?.name}</Title>
            <SubTitle>{meal?.description}</SubTitle>
            <SubTitle bold>Date and Hour</SubTitle>
            <SubTitle>{meal?.date} ás {meal?.time}</SubTitle>
            <Chip diet={meal?.diet as boolean} title={meal?.diet? 'dentro da dienta': 'fora da dieta'} />
            <Footer>
              <Button icon='EDIT'  onPress={()=> navigation.navigate('Meal',{mode: 'edit',id: id})} title='Edit Meal' />
              <Button color='SECONDARY' onPress={()=> setModalVisible(true)} icon='DELETE' title='Delete Meal' />
          </Footer>
        </Body>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <CenteredModal>
          <ViewModal>
            <HeaderModal>
              <Title style={{textAlign: 'center'}}>Deseja realmente excluir o registro da refeição?</Title>
            </HeaderModal> 
            <BodyModal>
              <ContentBoxModal>
                  <Button color='SECONDARY' title='Cancelar' onPress={()=> setModalVisible(false)} />  
              </ContentBoxModal>
              <ContentBoxModal style={{marginLeft: 10}}>
                  <Button  title='Sim, excluir' onPress={deleteHandler} />
              </ContentBoxModal>
            </BodyModal>
          </ViewModal>
        </CenteredModal>
      </Modal>
    </Container>
  )
}

export default MealDetails
