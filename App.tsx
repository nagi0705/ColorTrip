import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ComponentTest } from './src/components/ComponentTest';

export default function App() {
  return (
    <>
      <ComponentTest />
      <StatusBar style="auto" />
    </>
  );
}

