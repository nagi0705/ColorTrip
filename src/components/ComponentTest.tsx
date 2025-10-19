import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Button } from './Button';
import { RadioCard } from './RadioCard';
import { ProgressBar } from './ProgressBar';
import { ResultCard } from './ResultCard';
import { getPaletteById } from '../lib/palettes';

export const ComponentTest: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(3);
  const totalSteps = 9;

  const handleButtonPress = (buttonType: string) => {
    console.log(`${buttonType} button pressed`);
  };

  const handleRadioPress = (option: string) => {
    setSelectedOption(option);
    console.log(`Selected: ${option}`);
  };

  const parisPalette = getPaletteById('paris');
  const tokyoPalette = getPaletteById('tokyo');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>🎨 UIコンポーネントテスト</Text>
        
        {/* Button コンポーネントテスト */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Button コンポーネント</Text>
          <Button
            title="Primary Button"
            onPress={() => handleButtonPress('Primary')}
            variant="primary"
            style={styles.button}
          />
          <Button
            title="Secondary Button"
            onPress={() => handleButtonPress('Secondary')}
            variant="secondary"
            style={styles.button}
          />
          <Button
            title="Outline Button"
            onPress={() => handleButtonPress('Outline')}
            variant="outline"
            style={styles.button}
          />
          <Button
            title="Loading Button"
            onPress={() => handleButtonPress('Loading')}
            loading={true}
            style={styles.button}
          />
          <Button
            title="Disabled Button"
            onPress={() => handleButtonPress('Disabled')}
            disabled={true}
            style={styles.button}
          />
        </View>

        {/* RadioCard コンポーネントテスト */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RadioCard コンポーネント</Text>
          <RadioCard
            title="暖かみのあるイエローベース"
            selected={selectedOption === 'warm'}
            onPress={() => handleRadioPress('warm')}
          />
          <RadioCard
            title="涼しげなブルーベース"
            selected={selectedOption === 'cool'}
            onPress={() => handleRadioPress('cool')}
          />
          <RadioCard
            title="ナチュラルで落ち着いた印象"
            selected={selectedOption === 'natural'}
            onPress={() => handleRadioPress('natural')}
          />
          <RadioCard
            title="Disabled Option"
            selected={false}
            onPress={() => handleRadioPress('disabled')}
            disabled={true}
          />
        </View>

        {/* ProgressBar コンポーネントテスト */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ProgressBar コンポーネント</Text>
          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
            showText={true}
          />
          <View style={styles.progressControls}>
            <Button
              title="前へ"
              onPress={() => setCurrentStep(Math.max(1, currentStep - 1))}
              size="small"
              variant="secondary"
            />
            <Button
              title="次へ"
              onPress={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
              size="small"
              variant="primary"
            />
          </View>
        </View>

        {/* ResultCard コンポーネントテスト */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ResultCard コンポーネント</Text>
          {parisPalette && (
            <ResultCard
              palette={parisPalette}
              score={85}
              percentage={85}
              style={styles.resultCard}
            />
          )}
          {tokyoPalette && (
            <ResultCard
              palette={tokyoPalette}
              score={72}
              percentage={72}
              style={styles.resultCard}
            />
          )}
        </View>

        {/* スペーサー */}
        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#374151',
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    marginBottom: 12,
  },
  progressControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  resultCard: {
    margin: 0,
  },
  spacer: {
    height: 40,
  },
});
