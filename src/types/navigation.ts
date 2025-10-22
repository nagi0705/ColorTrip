import { Answer } from './index';

// ナビゲーションのパラメータ型定義
export type RootStackParamList = {
  Home: undefined;
  Question: undefined;
  Result: {
    answers: Answer[];
  };
  PaletteDetail: {
    paletteId: string;
  };
};

