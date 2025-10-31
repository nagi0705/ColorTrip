import React from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { DiagnosisProvider } from './src/context/DiagnosisContext';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <DiagnosisProvider>
        <AppNavigator />
      </DiagnosisProvider>
    </ThemeProvider>
  );
}

