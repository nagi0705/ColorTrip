import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';

export interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  showText?: boolean;
  style?: ViewStyle;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  showText = true,
  style,
}) => {
  const progress = Math.min(Math.max(currentStep / totalSteps, 0), 1);
  const percentage = Math.round(progress * 100);

  return (
    <View style={[styles.container, style]}>
      {showText && (
        <View style={styles.textContainer}>
          <Text style={styles.progressText}>
            質問 {currentStep} / {totalSteps}
          </Text>
          <Text style={styles.percentageText}>
            {percentage}%
          </Text>
        </View>
      )}
      
      <View style={styles.barContainer}>
        <View style={styles.backgroundBar}>
          <View
            style={[
              styles.progressBar,
              {
                width: `${percentage}%`,
              },
            ]}
          />
        </View>
      </View>
      
      {showText && (
        <View style={styles.stepDots}>
          {Array.from({ length: totalSteps }, (_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index < currentStep && styles.completedDot,
                index === currentStep - 1 && styles.currentDot,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  percentageText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  barContainer: {
    width: '100%',
    marginBottom: 8,
  },
  backgroundBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#8B5CF6',
    borderRadius: 4,
    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  stepDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
  },
  completedDot: {
    backgroundColor: '#8B5CF6',
  },
  currentDot: {
    backgroundColor: '#8B5CF6',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
