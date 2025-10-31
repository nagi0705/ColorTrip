import * as Sharing from 'expo-sharing';
import { DiagnosisResult } from '../types';
import { getPaletteById } from './palettes';

/**
 * 診断結果をテキスト形式でシェア
 */
export const shareDiagnosisResult = async (results: DiagnosisResult[]): Promise<void> => {
  try {
    const topResult = results[0];
    if (!topResult) {
      throw new Error('診断結果が見つかりません');
    }

    const palette = getPaletteById(topResult.paletteId);
    if (!palette) {
      throw new Error('パレット情報が見つかりません');
    }

    const shareText = createShareText(topResult, palette, results);

    // シェア機能が利用可能か確認
    const isAvailable = await Sharing.isAvailableAsync();
    if (!isAvailable) {
      // シェアできない場合は、クリップボードにコピー
      console.log('シェア内容:', shareText);
      return;
    }

    // シェアダイアログを表示
    await Sharing.shareAsync(shareText);
  } catch (error) {
    console.error('シェアに失敗しました:', error);
    throw error;
  }
};

/**
 * シェア用のテキストを作成
 */
const createShareText = (
  topResult: DiagnosisResult,
  palette: any,
  allResults: DiagnosisResult[]
): string => {
  const lines = [
    '🎨 ColorTrip 診断結果',
    '',
    `🏆 あなたにぴったりのパレット: ${palette.name} (${palette.nameEn})`,
    `📊 マッチ率: ${topResult.percentage}%`,
    '',
    `✨ ${palette.tagline}`,
    '',
    `💡 選ばれた理由: ${topResult.reason}`,
    '',
    'その他のおすすめ:',
  ];

  // 2位、3位を追加
  if (allResults.length > 1) {
    const second = getPaletteById(allResults[1].paletteId);
    if (second) {
      lines.push(`2位: ${second.name} - ${allResults[1].percentage}%`);
    }
  }

  if (allResults.length > 2) {
    const third = getPaletteById(allResults[2].paletteId);
    if (third) {
      lines.push(`3位: ${third.name} - ${allResults[2].percentage}%`);
    }
  }

  lines.push('');
  lines.push('ColorTripで、あなたにぴったりの色を見つけましょう ✈️');

  return lines.join('\n');
};

/**
 * 結果画面のスクリーンショットをシェア（将来的な拡張）
 */
export const shareScreenshot = async (): Promise<void> => {
  // 実装予定: 画面キャプチャ機能
  console.log('スクリーンショットシェア機能は実装予定です');
};

