import { Answer, DiagnosisResult } from '../types';
import { getAllQuestions } from './questions';
import { getPaletteById, getAllPalettes } from './palettes';

/**
 * 診断ロジック: 回答からスコアを計算し、結果を返す
 */
export const calculateDiagnosisResult = (answers: Answer[]): DiagnosisResult[] => {
  const questions = getAllQuestions();
  const scores: Record<string, number> = {};

  // 各回答からスコアを集計
  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (question && question.options[answer.selectedOptionIndex]) {
      const option = question.options[answer.selectedOptionIndex];
      
      // 各パレットのスコアを加算
      Object.entries(option.score).forEach(([paletteId, score]) => {
        scores[paletteId] = (scores[paletteId] || 0) + score;
      });
    }
  });

  // スコアを結果配列に変換
  const results: DiagnosisResult[] = Object.entries(scores)
    .map(([paletteId, score]) => {
      const palette = getPaletteById(paletteId);
      if (!palette) return null;

      return {
        paletteId,
        score,
        percentage: 0, // 後で計算
        reason: generateReason(paletteId, answers),
      };
    })
    .filter((result): result is DiagnosisResult => result !== null);

  // スコアの合計を計算
  const totalScore = results.reduce((sum, result) => sum + result.score, 0);

  // パーセンテージを計算
  results.forEach((result) => {
    result.percentage = totalScore > 0 
      ? Math.round((result.score / totalScore) * 100) 
      : 0;
  });

  // スコアの高い順にソート
  results.sort((a, b) => b.score - a.score);

  return results;
};

/**
 * トップ3の結果を取得
 */
export const getTop3Results = (answers: Answer[]): DiagnosisResult[] => {
  const results = calculateDiagnosisResult(answers);
  return results.slice(0, 3);
};

/**
 * 最も適したパレットを取得
 */
export const getBestMatch = (answers: Answer[]): DiagnosisResult | null => {
  const results = calculateDiagnosisResult(answers);
  return results.length > 0 ? results[0] : null;
};

/**
 * 診断理由を生成する
 */
const generateReason = (paletteId: string, answers: Answer[]): string => {
  const palette = getPaletteById(paletteId);
  if (!palette) return '';

  const questions = getAllQuestions();
  const reasons: string[] = [];

  // パーソナルカラーの一致をチェック
  const personalColorAnswer = answers.find((a) => a.questionId === 'q1');
  if (personalColorAnswer) {
    const question = questions.find((q) => q.id === 'q1');
    if (question) {
      const selectedOption = question.options[personalColorAnswer.selectedOptionIndex];
      if (selectedOption.text.includes('イエローベース') && palette.personalColor === 'warm') {
        reasons.push('イエローベースの肌に似合う暖色系パレット');
      } else if (selectedOption.text.includes('ブルーベース') && palette.personalColor === 'cool') {
        reasons.push('ブルーベースの肌に映える寒色系パレット');
      }
    }
  }

  // 好みの雰囲気をチェック
  const atmosphereAnswer = answers.find((a) => a.questionId === 'q2');
  if (atmosphereAnswer) {
    const question = questions.find((q) => q.id === 'q2');
    if (question) {
      const selectedOption = question.options[atmosphereAnswer.selectedOptionIndex];
      if (selectedOption.text.includes('ナチュラル') && palette.colorFeatures.matte >= 6) {
        reasons.push('ナチュラルな印象のマット系が豊富');
      } else if (selectedOption.text.includes('華やか') && palette.colorFeatures.shimmer >= 3) {
        reasons.push('華やかな印象のシマーやグリッターが特徴');
      }
    }
  }

  // 色の傾向をチェック
  const colorAnswer = answers.find((a) => a.questionId === 'q4');
  if (colorAnswer) {
    const question = questions.find((q) => q.id === 'q4');
    if (question) {
      const selectedOption = question.options[colorAnswer.selectedOptionIndex];
      if (selectedOption.text.includes('暖色系') && palette.colorFeatures.warm >= 7) {
        reasons.push('暖色系の色が豊富で温かみのある印象');
      } else if (selectedOption.text.includes('寒色系') && palette.colorFeatures.cool >= 5) {
        reasons.push('寒色系の色で爽やかな印象');
      }
    }
  }

  // デフォルトの理由
  if (reasons.length === 0) {
    reasons.push(palette.tagline);
  }

  return reasons.join('、');
};

/**
 * スコアの統計情報を取得
 */
export const getDiagnosisStats = (answers: Answer[]) => {
  const results = calculateDiagnosisResult(answers);
  
  return {
    totalPalettes: results.length,
    topScore: results[0]?.score || 0,
    topPercentage: results[0]?.percentage || 0,
    averageScore: results.reduce((sum, r) => sum + r.score, 0) / results.length,
  };
};

