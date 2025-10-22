import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface RadioCardProps {
  title: string;
  selected: boolean;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const RadioCard: React.FC<RadioCardProps> = ({
  title,
  selected,
  onPress,
  disabled = false,
  style,
  textStyle,
}) => {
  const cardStyle = [
    styles.card,
    selected && styles.selectedCard,
    disabled && styles.disabledCard,
    style,
  ];

  const titleStyle = [
    styles.title,
    selected && styles.selectedTitle,
    disabled && styles.disabledTitle,
    textStyle,
  ];

  const indicatorStyle = [
    styles.indicator,
    selected && styles.selectedIndicator,
  ];

  return (
    <TouchableOpacity
      style={cardStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={titleStyle}>{title}</Text>
      <TouchableOpacity
        style={indicatorStyle}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
      >
        {selected && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 182, 193, 0.5)',
    shadowColor: '#FFB6C1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  selectedCard: {
    borderColor: '#FF6B9D',
    backgroundColor: 'rgba(255, 107, 157, 0.15)',
    shadowColor: '#FF6B9D',
    shadowOpacity: 0.25,
    elevation: 6,
  },
  disabledCard: {
    opacity: 0.5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#2D3748',
    lineHeight: 24,
    marginRight: 16,
  },
  selectedTitle: {
    color: '#FF6B9D',
    fontWeight: 'bold',
  },
  disabledTitle: {
    color: '#A0AEC0',
  },
  indicator: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 3,
    borderColor: 'rgba(255, 182, 193, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFB6C1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedIndicator: {
    borderColor: '#FF6B9D',
    backgroundColor: '#FF6B9D',
    shadowColor: '#FF6B9D',
    shadowOpacity: 0.3,
    elevation: 4,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
