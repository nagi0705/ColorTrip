import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { Button } from '../components/Button';
import { ResultCard } from '../components/ResultCard';
import { getTop3Results } from '../lib/diagnosis';
import { getPaletteById } from '../lib/palettes';
import { DiagnosisResult } from '../types';

type ResultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Result'>;
type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

interface ResultScreenProps {
  navigation: ResultScreenNavigationProp;
  route: ResultScreenRouteProp;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ navigation, route }) => {
  const { answers } = route.params;
  const [results, setResults] = useState<DiagnosisResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 診断結果を計算
    const calculatedResults = getTop3Results(answers);
    setResults(calculatedResults);
    setIsLoading(false);
  }, [answers]);

  const handleRetry = () => {
    navigation.navigate('Question');
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  const handleViewDetail = (paletteId: string) => {
    navigation.navigate('PaletteDetail', { paletteId });
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>診断結果を計算中...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const topResult = results[0];
  const topPalette = topResult ? getPaletteById(topResult.paletteId) : null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ヘッダー */}
        <LinearGradient
          colors={['#FF6B9D', '#C44569', '#F8B500', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']}
          style={styles.header}
        >
          <Text style={styles.headerEmoji}>🎉</Text>
          <Text style={styles.headerTitle}>診断結果</Text>
          <Text style={styles.headerSubtitle}>
            あなたにぴったりのパレットが見つかりました！
          </Text>
        </LinearGradient>

        {/* トップ結果 */}
        {topResult && topPalette && (
          <View style={styles.topResultContainer}>
            <View style={styles.topBadge}>
              <Text style={styles.topBadgeText}>🏆 No.1 おすすめ</Text>
            </View>
            <ResultCard
              palette={topPalette}
              score={topResult.score}
              percentage={topResult.percentage}
              style={styles.resultCard}
            />
            <View style={styles.reasonContainer}>
              <Text style={styles.reasonTitle}>選ばれた理由</Text>
              <Text style={styles.reasonText}>{topResult.reason}</Text>
            </View>
            <Button
              title="詳細を見る"
              onPress={() => handleViewDetail(topResult.paletteId)}
              variant="primary"
              size="medium"
              style={styles.detailButton}
            />
          </View>
        )}

        {/* その他の結果 */}
        {results.length > 1 && (
          <View style={styles.otherResultsContainer}>
            <Text style={styles.otherResultsTitle}>その他のおすすめ</Text>
            {results.slice(1).map((result, index) => {
              const palette = getPaletteById(result.paletteId);
              if (!palette) return null;

              return (
                <TouchableOpacity
                  key={result.paletteId}
                  onPress={() => handleViewDetail(result.paletteId)}
                  activeOpacity={0.7}
                >
                  <View style={styles.otherResultCard}>
                    <View style={styles.otherResultRank}>
                      <Text style={styles.otherResultRankText}>
                        {index + 2}
                      </Text>
                    </View>
                    <View style={styles.otherResultContent}>
                      <Text style={styles.otherResultName}>
                        {palette.name} ({palette.nameEn})
                      </Text>
                      <Text style={styles.otherResultTagline}>
                        {palette.tagline}
                      </Text>
                      <View style={styles.otherResultMatch}>
                        <Text style={styles.otherResultMatchText}>
                          {result.percentage}% マッチ
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* アクションボタン */}
        <View style={styles.actions}>
          <Button
            title="もう一度診断する"
            onPress={handleRetry}
            variant="outline"
            size="medium"
            style={StyleSheet.flatten([styles.actionButton, { borderColor: '#FF6B9D', borderWidth: 2 }])}
            textStyle={{ color: '#FF6B9D' }}
          />
          <Button
            title="ホームに戻る"
            onPress={handleGoHome}
            variant="secondary"
            size="medium"
            style={StyleSheet.flatten([styles.actionButton, { backgroundColor: '#4ECDC4' }])}
            textStyle={{ color: '#FFFFFF' }}
          />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#6B7280',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  headerEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
  },
  topResultContainer: {
    paddingHorizontal: 16,
    marginTop: -20,
  },
  topBadge: {
    alignSelf: 'center',
    backgroundColor: '#FFEAA7',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: '#FFD93D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  topBadgeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  resultCard: {
    marginHorizontal: 0,
  },
  reasonContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    marginTop: 16,
    marginHorizontal: 16,
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  reasonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B9D',
    marginBottom: 12,
  },
  reasonText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  detailButton: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: '#FF6B9D',
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  otherResultsContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  otherResultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B9D',
    marginBottom: 20,
    textAlign: 'center',
  },
  otherResultCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  otherResultRank: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFEAA7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#FFD93D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  otherResultRankText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  otherResultContent: {
    flex: 1,
  },
  otherResultName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  otherResultTagline: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  otherResultMatch: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFEAA7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#FFD93D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  otherResultMatchText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  actions: {
    paddingHorizontal: 16,
    marginTop: 24,
    gap: 12,
  },
  actionButton: {
    marginBottom: 0,
  },
  spacer: {
    height: 24,
  },
});

