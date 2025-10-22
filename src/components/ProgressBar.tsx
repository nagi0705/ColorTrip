import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
          <LinearGradient
            colors={['#FF6B9D', '#C44569', '#F8B500', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
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
          {Array.from({ length: totalSteps }, (_, index) => {
            const rainbowColors = ['#FF6B9D', '#C44569', '#F8B500', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98FB98'];
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep - 1;
            
            return (
              <View
                key={index}
                style={[
                  styles.dot,
                  isCompleted && styles.completedDot,
                  isCurrent && styles.currentDot,
                  isCompleted && { backgroundColor: rainbowColors[index % rainbowColors.length] },
                  isCurrent && { backgroundColor: rainbowColors[index % rainbowColors.length] },
                ]}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B9D',
  },
  percentageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C44569',
  },
  barContainer: {
    width: '100%',
    marginBottom: 12,
  },
  backgroundBar: {
    width: '100%',
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  progressBar: {
    height: '100%',
    borderRadius: 8,
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  stepDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  completedDot: {
    borderColor: '#FF6B9D',
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  currentDot: {
    borderColor: '#FF6B9D',
    width: 14,
    height: 14,
    borderRadius: 7,
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
});
