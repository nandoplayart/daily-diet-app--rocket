import { View, Image } from 'react-native'
import React from 'react'
import { Container, Subtitle, Title } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../../components/Button'


type MealDoneProps = {
    diet: boolean
}

const MealDone = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const {diet} = route.params as MealDoneProps;   
  return (
    <Container>
         <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 25}}>
     {diet &&
        <>
            <Title diet={diet}>Continue assim!</Title>   
            <Subtitle >Você continua <Subtitle bold>dentro da dienta</Subtitle>. Muito bem!</Subtitle>
        </>
    }
    {!diet &&
        <>
            <Title diet={diet}>Que pena!</Title>   
            <Subtitle >Você <Subtitle bold>saiu da dienta</Subtitle> dessa vez, mas continue
            se esforçando e não desista!</Subtitle>
        </>
    }
    </View>
    <View style={{flex:3, justifyContent: 'center', alignItems: 'center'}}>
       {diet && <Image source={require('../../assets/Illustration.png')}  />}
       {!diet && <Image source={require('../../assets/Illustration2.png')}  />}
    </View>

    <View style={{flex:2, justifyContent: 'flex-start'}}>
        <Button title='Ir para a pagina inicial' onPress={()=> navigation.navigate('Home')} />
    </View>
   
    </Container>
  )
}

export default MealDone