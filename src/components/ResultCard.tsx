import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import { PaletteInfo } from '../types';

export interface ResultCardProps {
  palette: PaletteInfo;
  score?: number;
  percentage?: number;
  style?: ViewStyle;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  palette,
  score,
  percentage,
  style,
}) => {
  const matchPercentage = percentage || (score ? Math.round((score / 100) * 100) : 0);

  return (
    <View style={[styles.container, style]}>
      {/* ヘッダー */}
      <View style={styles.header}>
        <Text style={styles.matchText}>
          {matchPercentage}% マッチ！
        </Text>
        <Text style={styles.cityText}>
          {palette.name} ({palette.nameEn})
        </Text>
      </View>

      {/* パレット画像 */}
      <View style={styles.imageContainer}>
        <Image
          source={palette.imagePath}
          style={styles.paletteImage}
          resizeMode="contain"
        />
      </View>

      {/* タグライン */}
      <Text style={styles.tagline}>
        {palette.tagline}
      </Text>

      {/* 説明文 */}
      <Text style={styles.description}>
        {palette.description}
      </Text>

      {/* パーソナルカラー */}
      <View style={styles.colorTypeContainer}>
        <Text style={styles.colorTypeLabel}>パーソナルカラー:</Text>
        <View style={styles.colorTypeBadge}>
          <Text style={styles.colorTypeText}>
            {palette.personalColor === 'warm' ? 'イエベ' : 
             palette.personalColor === 'cool' ? 'ブルベ' : 'ニュートラル'}
          </Text>
        </View>
      </View>

      {/* 色の特徴 */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>色の特徴</Text>
        <View style={styles.featuresGrid}>
          <View style={styles.featureItem}>
            <Text style={styles.featureLabel}>暖色系</Text>
            <View style={styles.featureBar}>
              <View
                style={[
                  styles.featureProgress,
                  { width: `${palette.colorFeatures.warm * 10}%` },
                  styles.warmColor,
                ]}
              />
            </View>
            <Text style={styles.featureValue}>{palette.colorFeatures.warm}/10</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureLabel}>寒色系</Text>
            <View style={styles.featureBar}>
              <View
                style={[
                  styles.featureProgress,
                  { width: `${palette.colorFeatures.cool * 10}%` },
                  styles.coolColor,
                ]}
              />
            </View>
            <Text style={styles.featureValue}>{palette.colorFeatures.cool}/10</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureLabel}>マット</Text>
            <View style={styles.featureBar}>
              <View
                style={[
                  styles.featureProgress,
                  { width: `${palette.colorFeatures.matte * 10}%` },
                  styles.matteColor,
                ]}
              />
            </View>
            <Text style={styles.featureValue}>{palette.colorFeatures.matte}/10</Text>
          </View>
          
          <View style={styles.featureItem}>
            <Text style={styles.featureLabel}>シマー</Text>
            <View style={styles.featureBar}>
              <View
                style={[
                  styles.featureProgress,
                  { width: `${palette.colorFeatures.shimmer * 10}%` },
                  styles.shimmerColor,
                ]}
              />
            </View>
            <Text style={styles.featureValue}>{palette.colorFeatures.shimmer}/10</Text>
          </View>
        </View>
      </View>

      {/* 推奨対象 */}
      <View style={styles.recommendationsContainer}>
        <Text style={styles.recommendationsTitle}>こんな方におすすめ</Text>
        {palette.recommendedFor.map((item, index) => (
          <View key={index} style={styles.recommendationItem}>
            <Text style={styles.recommendationBullet}>•</Text>
            <Text style={styles.recommendationText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* シチュエーション */}
      <View style={styles.scenariosContainer}>
        <Text style={styles.scenariosTitle}>おすすめシチュエーション</Text>
        <View style={styles.scenarioTags}>
          {palette.scenarios.map((scenario, index) => (
            <View key={index} style={styles.scenarioTag}>
              <Text style={styles.scenarioTagText}>{scenario}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    margin: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  matchText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 4,
  },
  cityText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  paletteImage: {
    width: 200,
    height: 120,
    borderRadius: 12,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 12,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  colorTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  colorTypeLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginRight: 8,
  },
  colorTypeBadge: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  colorTypeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  featuresContainer: {
    marginBottom: 16,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
    textAlign: 'center',
  },
  featuresGrid: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureLabel: {
    fontSize: 12,
    color: '#6B7280',
    width: 60,
  },
  featureBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  featureProgress: {
    height: '100%',
    borderRadius: 4,
  },
  warmColor: {
    backgroundColor: '#F59E0B',
  },
  coolColor: {
    backgroundColor: '#3B82F6',
  },
  matteColor: {
    backgroundColor: '#6B7280',
  },
  shimmerColor: {
    backgroundColor: '#F59E0B',
  },
  featureValue: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '600',
    width: 40,
    textAlign: 'right',
  },
  recommendationsContainer: {
    marginBottom: 16,
  },
  recommendationsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  recommendationBullet: {
    fontSize: 14,
    color: '#8B5CF6',
    marginRight: 8,
    marginTop: 2,
  },
  recommendationText: {
    flex: 1,
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  scenariosContainer: {
    marginBottom: 8,
  },
  scenariosTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  scenarioTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  scenarioTag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  scenarioTagText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
});
