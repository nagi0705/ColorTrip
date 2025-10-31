// ColorTrip アプリのテーマ定義

/**
 * カラーパレット
 */
export const colors = {
  // プライマリカラー（ピンク系統）
  primary: '#8B5CF6', // プライマリ紫
  primaryLight: '#FF6B9D', // ピンク
  primaryDark: '#C44569', // ダークピンク
  
  // セカンダリカラー
  secondary: '#4ECDC4', // ターコイズ
  secondaryLight: '#45B7D1', // スカイブルー
  secondaryDark: '#96CEB4', // ミントグリーン
  
  // アクセントカラー
  accent: '#F8B500', // ゴールド
  accentLight: '#FFEAA7', // イエロー
  accentDark: '#FFB6C1', // ピンク
  
  // ニュートラルカラー
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // セマンティックカラー
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  
  // グラデーション
  gradient: {
    primary: ['#FF6B9D', '#C44569', '#F8B500', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
    home: ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF', '#E1BAFF', '#FFB3BA'],
    question: ['#FFE5F1', '#FFF5E5', '#FFFFE5', '#E5FFF5', '#E5F5FF', '#F5E5FF'],
    success: ['#FF6B9D', '#4ECDC4', '#FFEAA7'],
  },
};

/**
 * スペーシング
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 64,
};

/**
 * タイポグラフィ
 */
export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

/**
 * 角丸
 */
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 9999,
};

/**
 * シャドウ
 */
export const shadows = {
  sm: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  xl: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  pink: {
    shadowColor: '#FF6B9D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
};

/**
 * ダークモード対応
 */
export const darkColors = {
  // プライマリカラー（ピンク系統）
  primary: '#A78BFA',
  primaryLight: '#F472B6',
  primaryDark: '#EC4899',
  
  // セカンダリカラー
  secondary: '#5EEAD4',
  secondaryLight: '#67E8F9',
  secondaryDark: '#6EE7B7',
  
  // アクセントカラー
  accent: '#FCD34D',
  accentLight: '#FEF08A',
  accentDark: '#FCA5A5',
  
  // ニュートラルカラー
  white: '#1F2937',
  black: '#F9FAFB',
  gray: {
    50: '#111827',
    100: '#1F2937',
    200: '#374151',
    300: '#4B5563',
    400: '#6B7280',
    500: '#9CA3AF',
    600: '#D1D5DB',
    700: '#E5E7EB',
    800: '#F3F4F6',
    900: '#F9FAFB',
  },
  
  // セマンティックカラー
  success: '#34D399',
  error: '#F87171',
  warning: '#FBBF24',
  info: '#60A5FA',
  
  // グラデーション
  gradient: {
    primary: ['#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#8B5CF6'],
    home: ['#1F2937', '#374151', '#4B5563', '#111827'],
    question: ['#1F2937', '#374151', '#4B5563', '#111827'],
    success: ['#EC4899', '#06B6D4', '#F59E0B'],
  },
};

/**
 * テーマ全体
 */
export const theme = {
  light: {
    colors,
    spacing,
    typography,
    borderRadius,
    shadows,
  },
  dark: {
    colors: darkColors,
    spacing,
    typography,
    borderRadius,
    shadows,
  },
};

// デフォルトテーマ
export default theme.light;


