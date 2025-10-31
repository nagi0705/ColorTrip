import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useDiagnosis } from '../context/DiagnosisContext';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { startDiagnosis } = useDiagnosis();

  const handleStart = () => {
    startDiagnosis(); // 診断開始を記録
    navigation.navigate('Question');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#E1BAFF', '#FFB3BA']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          {/* ヘッダー */}
          <View style={styles.header}>
            <Text style={styles.logo}>✈️ ColorTrip</Text>
            <Text style={styles.subtitle}>世界の都市で見つける、あなたの色</Text>
          </View>

          {/* メインコンテンツ */}
          <View style={styles.main}>
            <View style={styles.contentWrapper}>
              <Text style={styles.title}>
                あなたにぴったりの{'\n'}アイシャドウパレットを{'\n'}見つけましょう
              </Text>
              
              <View style={styles.iconContainer}>
                <Text style={styles.mainIcon}>🌈</Text>
              </View>
              
              <Text style={styles.description}>
                世界10都市をテーマにした{'\n'}
                FOCALLURE GO TRAVELパレットから{'\n'}
                あなたに最適な色を診断します
              </Text>
              
              <View style={styles.features}>
                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>💕</Text>
                  <Text style={styles.featureText}>9つの質問</Text>
                </View>
                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>🌸</Text>
                  <Text style={styles.featureText}>10都市のパレット</Text>
                </View>
                <View style={styles.featureItem}>
                  <Text style={styles.featureIcon}>✨</Text>
                  <Text style={styles.featureText}>約2分で完了</Text>
                </View>
              </View>
            </View>
          </View>

          {/* ボトムボタン */}
          <View style={styles.bottom}>
            <Button
              title="診断をはじめる"
              onPress={handleStart}
              variant="primary"
              size="large"
              style={styles.startButton}
              textStyle={styles.startButtonText}
            />
            <Text style={styles.note}>
              パーソナルカラーや好みに基づいて診断します
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#FF1493',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  mainIcon: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 0,
    lineHeight: 32,
  },
  description: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 22,
    marginTop: 0,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 32,
    marginTop: 32,
    marginBottom: 32,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 8,
  },
  featureIcon: {
    fontSize: 36,
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  bottom: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  startButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  startButtonText: {
    color: '#FF6B9D',
  },
  note: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 12,
    opacity: 0.8,
  },
});

