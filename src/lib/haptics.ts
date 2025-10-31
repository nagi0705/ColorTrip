import * as Haptics from 'expo-haptics';

/**
 * ハプティックフィードバックの種類
 */
export const hapticFeedback = {
  /**
   * 軽いタップ（UI操作の確認）
   */
  light: () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  },

  /**
   * 中程度のタップ（重要な操作の確認）
   */
  medium: () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  },

  /**
   * 強いタップ（成功や完了の通知）
   */
  heavy: () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  },

  /**
   * 成功フィードバック
   */
  success: () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  },

  /**
   * 警告フィードバック
   */
  warning: () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  },

  /**
   * エラーフィードバック
   */
  error: () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  },

  /**
   * 選択フィードバック（ピッカーなど）
   */
  selection: () => {
    Haptics.selectionAsync();
  },
};

/**
 * ボタンタップ時のフィードバック
 */
export const buttonHaptic = () => {
  hapticFeedback.light();
};

/**
 * 成功時のフィードバック
 */
export const successHaptic = () => {
  hapticFeedback.success();
};

/**
 * エラー時のフィードバック
 */
export const errorHaptic = () => {
  hapticFeedback.error();
};


