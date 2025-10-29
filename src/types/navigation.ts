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

// ナビゲーションのプロパティ型定義
export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  navigation: any; // React Navigationの型は後で詳細化
  route: {
    params: RootStackParamList[T];
  };
};

// 各画面のナビゲーション型定義
export type HomeScreenProps = RootStackScreenProps<'Home'>;
export type QuestionScreenProps = RootStackScreenProps<'Question'>;
export type ResultScreenProps = RootStackScreenProps<'Result'>;
export type PaletteDetailScreenProps = RootStackScreenProps<'PaletteDetail'>;

