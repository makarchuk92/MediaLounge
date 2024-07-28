import Header from '@/components/Header';
import Navigation from '@/navigation/Navigation';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
          <Navigation />
      </SafeAreaProvider>
      <StatusBar style="light" />
    </>
  );
}


