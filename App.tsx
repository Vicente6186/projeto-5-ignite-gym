import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import Loading from '@screens/Loading';
import SignIn from '@screens/SignIn';
import { config } from 'config/gluestack-ui.config';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from 'src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <GluestackUIProvider config={config}>
      <StatusBar style="light" />
      {fontsLoaded ? <Routes /> : <Loading /> }
    </GluestackUIProvider>
  );
}

