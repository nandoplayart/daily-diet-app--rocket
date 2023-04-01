import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';
import { ThemeProvider } from 'styled-components/native';
import { GlobalTheme } from '../configurations/theme';
import Meal from '../screens/Meal';
import MealDone from '../screens/MealDone';
import MealDetails from '../screens/MealDetails';

const Stack = createNativeStackNavigator();

function HomeScreen() {
    return (
      <View style={{ flex: 1,backgroundColor: '#00dsddd', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

const Routes = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
              headerShown:false
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Meal" component={Meal} />
            <Stack.Screen name="MealDone" component={MealDone} />
            <Stack.Screen name="MealDetails" component={MealDetails} />
            </Stack.Navigator>
      </NavigationContainer>
  </ThemeProvider>
  )
}

export default Routes