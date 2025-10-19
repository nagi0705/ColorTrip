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
    paddingVertical: 16,
    marginVertical: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedCard: {
    borderColor: '#8B5CF6',
    backgroundColor: '#F8FAFC',
    shadowColor: '#8B5CF6',
    shadowOpacity: 0.2,
    elevation: 4,
  },
  disabledCard: {
    opacity: 0.5,
    backgroundColor: '#F9FAFB',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    lineHeight: 22,
    marginRight: 12,
  },
  selectedTitle: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  disabledTitle: {
    color: '#9CA3AF',
  },
  indicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedIndicator: {
    borderColor: '#8B5CF6',
    backgroundColor: '#8B5CF6',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
