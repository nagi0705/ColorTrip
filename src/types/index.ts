// ColorTrip アプリの型定義
import { ImageSourcePropType } from 'react-native';

// パーソナルカラータイプ
export type PersonalColorType = 'warm' | 'cool' | 'neutral';

// パレットの色の特徴
export interface ColorFeatures {
  warm: number;    // 暖色系の割合 (0-10)
  cool: number;    // 寒色系の割合 (0-10)
  matte: number;   // マットの割合 (0-10)
  shimmer: number; // シマーの割合 (0-10)
  glitter: number; // グリッターの割合 (0-10)
}

// パレットの情報
export interface PaletteInfo {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  imagePath: ImageSourcePropType;
  personalColor: PersonalColorType;
  colorFeatures: ColorFeatures;
  recommendedFor: string[];
  scenarios: string[];
}

// 質問の選択肢
export interface QuestionOption {
  text: string;
  score: Record<string, number>; // パレットID -> スコアのマッピング
}

// 質問の情報
export interface Question {
  id: string;
  text: string;
  category: 'personal-color' | 'situation' | 'preference';
  options: QuestionOption[];
}

// 診断結果
export interface DiagnosisResult {
  paletteId: string;
  score: number;
  percentage: number;
  reason: string;
}

// 回答データ
export interface Answer {
  questionId: string;
  selectedOptionIndex: number;
}

// 診断の進行状況
export interface DiagnosisProgress {
  currentQuestionIndex: number;
  totalQuestions: number;
  answers: Answer[];
}
