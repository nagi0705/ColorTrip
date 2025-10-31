import AsyncStorage from '@react-native-async-storage/async-storage';
import { Answer, DiagnosisResult } from '../types';

// AsyncStorage のキー
const STORAGE_KEYS = {
  DIAGNOSIS_HISTORY: '@colortrip:diagnosis_history',
  LAST_RESULT: '@colortrip:last_result',
  USER_ANSWERS: '@colortrip:user_answers',
} as const;

// 診断結果の履歴データ
export interface DiagnosisHistoryItem {
  id: string;
  timestamp: Date;
  results: DiagnosisResult[];
  answers: Answer[];
  duration: number; // 診断にかかった時間（秒）
}

/**
 * 診断結果を履歴に保存
 */
export const saveDiagnosisHistory = async (
  results: DiagnosisResult[],
  answers: Answer[],
  duration: number
): Promise<void> => {
  try {
    const historyItem: DiagnosisHistoryItem = {
      id: Date.now().toString(),
      timestamp: new Date(),
      results,
      answers,
      duration,
    };

    // 既存の履歴を取得
    const existingHistory = await getDiagnosisHistory();
    
    // 新しい履歴を先頭に追加（最新10件のみ保持）
    const updatedHistory = [historyItem, ...existingHistory].slice(0, 10);

    // 保存
    await AsyncStorage.setItem(
      STORAGE_KEYS.DIAGNOSIS_HISTORY,
      JSON.stringify(updatedHistory)
    );

    // 最後の結果も個別に保存
    await AsyncStorage.setItem(
      STORAGE_KEYS.LAST_RESULT,
      JSON.stringify(historyItem)
    );
  } catch (error) {
    console.error('Failed to save diagnosis history:', error);
  }
};

/**
 * 診断結果の履歴を取得
 */
export const getDiagnosisHistory = async (): Promise<DiagnosisHistoryItem[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.DIAGNOSIS_HISTORY);
    if (!data) return [];

    const history = JSON.parse(data) as DiagnosisHistoryItem[];
    
    // 日付を復元
    return history.map(item => ({
      ...item,
      timestamp: new Date(item.timestamp),
    }));
  } catch (error) {
    console.error('Failed to get diagnosis history:', error);
    return [];
  }
};

/**
 * 最後の診断結果を取得
 */
export const getLastDiagnosisResult = async (): Promise<DiagnosisHistoryItem | null> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.LAST_RESULT);
    if (!data) return null;

    const result = JSON.parse(data) as DiagnosisHistoryItem;
    
    // 日付を復元
    return {
      ...result,
      timestamp: new Date(result.timestamp),
    };
  } catch (error) {
    console.error('Failed to get last diagnosis result:', error);
    return null;
  }
};

/**
 * 診断履歴をクリア
 */
export const clearDiagnosisHistory = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.DIAGNOSIS_HISTORY);
    await AsyncStorage.removeItem(STORAGE_KEYS.LAST_RESULT);
    await AsyncStorage.removeItem(STORAGE_KEYS.USER_ANSWERS);
  } catch (error) {
    console.error('Failed to clear diagnosis history:', error);
  }
};

/**
 * ユーザーの回答を保存（途中保存用）
 */
export const saveUserAnswers = async (answers: Answer[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.USER_ANSWERS,
      JSON.stringify(answers)
    );
  } catch (error) {
    console.error('Failed to save user answers:', error);
  }
};

/**
 * ユーザーの回答を取得
 */
export const getUserAnswers = async (): Promise<Answer[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_ANSWERS);
    if (!data) return [];
    return JSON.parse(data) as Answer[];
  } catch (error) {
    console.error('Failed to get user answers:', error);
    return [];
  }
};

/**
 * 診断履歴の統計情報を取得
 */
export const getDiagnosisStats = async () => {
  try {
    const history = await getDiagnosisHistory();
    
    if (history.length === 0) {
      return {
        totalDiagnoses: 0,
        averageDuration: 0,
        mostCommonPalette: null,
        lastDiagnosisDate: null,
      };
    }

    // 最も多く選ばれたパレット
    const paletteCounts: Record<string, number> = {};
    history.forEach(item => {
      if (item.results.length > 0) {
        const topPalette = item.results[0].paletteId;
        paletteCounts[topPalette] = (paletteCounts[topPalette] || 0) + 1;
      }
    });

    const mostCommonPalette = Object.entries(paletteCounts)
      .sort(([, a], [, b]) => b - a)[0]?.[0] || null;

    // 平均診断時間
    const averageDuration = history.reduce((sum, item) => sum + item.duration, 0) / history.length;

    return {
      totalDiagnoses: history.length,
      averageDuration: Math.round(averageDuration),
      mostCommonPalette,
      lastDiagnosisDate: history[0]?.timestamp || null,
    };
  } catch (error) {
    console.error('Failed to get diagnosis stats:', error);
    return {
      totalDiagnoses: 0,
      averageDuration: 0,
      mostCommonPalette: null,
      lastDiagnosisDate: null,
    };
  }
};

