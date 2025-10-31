import React from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { DiagnosisProvider } from './src/context/DiagnosisContext';

export default function App() {
  return (
    <DiagnosisProvider>
      <AppNavigator />
    </DiagnosisProvider>
  );
}

