import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { GlobalTheme } from '../../configurations/theme'
import { Container, InfoHeader,IconBack,InfoBody,IconHeader, SubTitle, Title, BackHeader } from './styles'


type InfoProps = TouchableOpacityProps & {
  showIcon?: boolean;
  showIconBack?:boolean;
  title: string;
  titleSize?: 'XL'| 'XXL'
  subtitle: string;
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
}

const Info = ({showIcon,showIconBack, title,titleSize = 'XXL', subtitle, type = 'PRIMARY'}: InfoProps) => {
  
  const navigation = useNavigation();
  return (
    <Container  type={type}>
      {showIconBack &&
            <BackHeader onPress={()=> navigation.navigate('Home')}>
                <IconBack  color={type === 'PRIMARY'? GlobalTheme.Cores.GreenDark: 
                type === 'SECONDARY'? GlobalTheme.Cores.RedDark: GlobalTheme.Cores.Gray2 } />
            </BackHeader>
        }
         {showIcon &&
            <InfoHeader>
                <IconHeader color={type === 'PRIMARY'? GlobalTheme.Cores.GreenDark: GlobalTheme.Cores.RedDark } />
            </InfoHeader>
        }
        <InfoBody addPadding={ showIcon === false && showIconBack === undefined}>
            <Title titleSize={titleSize}>{title}</Title>
            <SubTitle>{subtitle}</SubTitle> 
        </InfoBody>     
    </Container>
  )
}

export default Info