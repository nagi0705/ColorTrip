import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation';
import { HomeScreen } from './src/screens/HomeScreen';
import { QuestionScreen } from './src/screens/QuestionScreen';
import { ResultScreen } from './src/screens/ResultScreen';
import { PaletteDetailScreen } from './src/screens/PaletteDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Question" 
          component={QuestionScreen}
        />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen}
        />
        <Stack.Screen 
          name="PaletteDetail" 
          component={PaletteDetailScreen}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

