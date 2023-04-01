import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CheckQuestion, Container, IconDiet, Title } from './styles'


type CheckProps = {
  checked: boolean | null,
  onChecked: (checked:boolean)=> void
}


const Check = ({checked, onChecked}:CheckProps) => {
  const [checkDiet,setCheckDiet] = useState(checked);
  const [checkNoDiet,setCheckNoDiet] = useState(checked);
  
  const checkHandler = (type:string)=>{
    if(type === 'diet'){
      setCheckDiet(true);
      setCheckNoDiet(false);
      onChecked(true);
    }else{
      setCheckDiet(false);
      setCheckNoDiet(true);
      onChecked(false);
    }
  }

  useEffect(() =>{
    if(checked !== undefined){
      checkHandler(checked === true? 'diet': 'nodiet');
     }
  },[checked])

  return (
    <Container>
        <CheckQuestion onPress={()=> checkHandler('diet') } type={checkDiet === false || checkDiet === undefined? 'PRIMARY':  'SECONDARY'}>
            <IconDiet diet />
            <Title>Sim</Title>
        </CheckQuestion>
        <CheckQuestion onPress={()=> checkHandler('nodiet') } type={checkNoDiet === false || checkNoDiet === undefined? 'PRIMARY':  'TERTIARY'}>
            <IconDiet />
            <Title>Não</Title>
        </CheckQuestion>
    </Container>
  )
}

export default Check