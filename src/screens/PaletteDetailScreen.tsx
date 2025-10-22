import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { Button } from '../components/Button';
import { ResultCard } from '../components/ResultCard';
import { getPaletteById } from '../lib/palettes';

type PaletteDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PaletteDetail'>;
type PaletteDetailScreenRouteProp = RouteProp<RootStackParamList, 'PaletteDetail'>;

interface PaletteDetailScreenProps {
  navigation: PaletteDetailScreenNavigationProp;
  route: PaletteDetailScreenRouteProp;
}

export const PaletteDetailScreen: React.FC<PaletteDetailScreenProps> = ({ navigation, route }) => {
  const { paletteId } = route.params;
  const palette = getPaletteById(paletteId);

  if (!palette) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>パレットが見つかりませんでした</Text>
          <Button
            title="戻る"
            onPress={() => navigation.goBack()}
            variant="primary"
            size="medium"
          />
        </View>
      </SafeAreaView>
    );
  }

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRetry = () => {
    navigation.navigate('Question');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ヘッダー */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleGoBack}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>← 戻る</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>パレット詳細</Text>
          <View style={styles.headerSpacer} />
        </View>

        {/* パレット情報 */}
        <View style={styles.content}>
          <ResultCard
            palette={palette}
            score={100}
            percentage={100}
            style={styles.resultCard}
          />

          {/* 追加情報セクション */}
          <View style={styles.additionalInfo}>
            {/* 色の配分 */}
            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>🎨 色の配分</Text>
              <View style={styles.colorDistribution}>
                <View style={styles.distributionItem}>
                  <View style={styles.distributionBar}>
                    <View
                      style={[
                        styles.distributionFill,
                        styles.warmFill,
                        { width: `${(palette.colorFeatures.warm / 10) * 100}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.distributionLabel}>
                    暖色系 {palette.colorFeatures.warm}/10
                  </Text>
                </View>
                <View style={styles.distributionItem}>
                  <View style={styles.distributionBar}>
                    <View
                      style={[
                        styles.distributionFill,
                        styles.coolFill,
                        { width: `${(palette.colorFeatures.cool / 10) * 100}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.distributionLabel}>
                    寒色系 {palette.colorFeatures.cool}/10
                  </Text>
                </View>
              </View>
            </View>

            {/* 質感の配分 */}
            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>✨ 質感の配分</Text>
              <View style={styles.colorDistribution}>
                <View style={styles.distributionItem}>
                  <View style={styles.distributionBar}>
                    <View
                      style={[
                        styles.distributionFill,
                        styles.matteFill,
                        { width: `${(palette.colorFeatures.matte / 10) * 100}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.distributionLabel}>
                    マット {palette.colorFeatures.matte}/10
                  </Text>
                </View>
                <View style={styles.distributionItem}>
                  <View style={styles.distributionBar}>
                    <View
                      style={[
                        styles.distributionFill,
                        styles.shimmerFill,
                        { width: `${(palette.colorFeatures.shimmer / 10) * 100}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.distributionLabel}>
                    シマー {palette.colorFeatures.shimmer}/10
                  </Text>
                </View>
                <View style={styles.distributionItem}>
                  <View style={styles.distributionBar}>
                    <View
                      style={[
                        styles.distributionFill,
                        styles.glitterFill,
                        { width: `${(palette.colorFeatures.glitter / 10) * 100}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.distributionLabel}>
                    グリッター {palette.colorFeatures.glitter}/10
                  </Text>
                </View>
              </View>
            </View>

            {/* パーソナルカラータイプ */}
            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>💡 パーソナルカラータイプ</Text>
              <View style={styles.personalColorBadge}>
                <Text style={styles.personalColorText}>
                  {palette.personalColor === 'warm'
                    ? '🌟 イエローベース（暖色系）'
                    : palette.personalColor === 'cool'
                    ? '❄️ ブルーベース（寒色系）'
                    : '🌈 ニュートラル（中間色）'}
                </Text>
              </View>
            </View>

            {/* このパレットの特徴 */}
            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>📝 このパレットの特徴</Text>
              <Text style={styles.featureDescription}>
                {palette.description}
              </Text>
            </View>
          </View>

          {/* アクションボタン */}
          <View style={styles.actions}>
            <Button
              title="他のパレットも診断する"
              onPress={handleRetry}
              variant="primary"
              size="large"
              style={styles.actionButton}
            />
          </View>
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  errorText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#8B5CF6',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
  },
  headerSpacer: {
    width: 60,
  },
  content: {
    paddingTop: 16,
  },
  resultCard: {
    marginHorizontal: 0,
  },
  additionalInfo: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 12,
  },
  colorDistribution: {
    gap: 12,
  },
  distributionItem: {
    gap: 6,
  },
  distributionBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  distributionFill: {
    height: '100%',
    borderRadius: 4,
  },
  warmFill: {
    backgroundColor: '#F59E0B',
  },
  coolFill: {
    backgroundColor: '#3B82F6',
  },
  matteFill: {
    backgroundColor: '#6B7280',
  },
  shimmerFill: {
    backgroundColor: '#F59E0B',
  },
  glitterFill: {
    backgroundColor: '#FCD34D',
  },
  distributionLabel: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '500',
  },
  personalColorBadge: {
    backgroundColor: '#EDE9FE',
    padding: 12,
    borderRadius: 12,
  },
  personalColorText: {
    fontSize: 14,
    color: '#6B21A8',
    fontWeight: '600',
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  actions: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  actionButton: {
    marginBottom: 0,
  },
  spacer: {
    height: 24,
  },
});

