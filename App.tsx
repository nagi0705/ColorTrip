import React from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { DiagnosisProvider } from './src/context/DiagnosisContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { LanguageProvider } from './src/context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <DiagnosisProvider>
          <AppNavigator />
        </DiagnosisProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

