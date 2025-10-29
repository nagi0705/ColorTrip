import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../types/navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { QuestionScreen } from '../screens/QuestionScreen';
import { ResultScreen } from '../screens/ResultScreen';
import { PaletteDetailScreen } from '../screens/PaletteDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'ColorTrip',
            animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="Question" 
          component={QuestionScreen}
          options={{
            title: '診断',
            gestureEnabled: true,
            animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen}
          options={{
            title: '診断結果',
            gestureEnabled: false, // 結果画面では戻るジェスチャーを無効化
            animationTypeForReplace: 'push',
          }}
        />
        <Stack.Screen 
          name="PaletteDetail" 
          component={PaletteDetailScreen}
          options={{
            title: 'パレット詳細',
            gestureEnabled: true,
            animationTypeForReplace: 'push',
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
