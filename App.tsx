import { SafeAreaView,View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';
import {ThemeProvider} from 'styled-components/native';
import { GlobalTheme } from './src/configurations/theme';
import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
import Routes from './src/routes';


export default function App() {

  const [fontLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (<>
          {fontLoaded? 
          <>
          <Routes /> 
          <StatusBar style='dark' />
          </>
          : 
          <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator /> 
          </View>}
          </>);
}


