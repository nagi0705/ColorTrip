import { Question } from '../types';

// ColorTrip 診断質問配列（9問）
export const questions: Question[] = [
  {
    id: 'q1',
    text: 'あなたの肌の色合いはどちらに近いですか？',
    category: 'personal-color',
    options: [
      {
        text: '暖かみのあるイエローベース',
        score: {
          paris: 2,
          prague: 8,
          perth: 3,
          turkey: 9,
          chongqing: 8,
          lijiang: 4,
          tokyo: 3,
          firenze: 9,
          xian: 8,
          yokohama: 3,
        },
      },
      {
        text: '涼しげなブルーベース',
        score: {
          paris: 8,
          prague: 2,
          perth: 7,
          turkey: 1,
          chongqing: 2,
          lijiang: 6,
          tokyo: 7,
          firenze: 1,
          xian: 2,
          yokohama: 7,
        },
      },
    ],
  },
  {
    id: 'q2',
    text: '好きなメイクの雰囲気はどちらですか？',
    category: 'preference',
    options: [
      {
        text: 'ナチュラルで落ち着いた印象',
        score: {
          paris: 7,
          prague: 8,
          perth: 6,
          turkey: 3,
          chongqing: 5,
          lijiang: 9,
          tokyo: 6,
          firenze: 4,
          xian: 7,
          yokohama: 6,
        },
      },
      {
        text: '華やかで印象的な印象',
        score: {
          paris: 3,
          prague: 2,
          perth: 4,
          turkey: 7,
          chongqing: 5,
          lijiang: 1,
          tokyo: 4,
          firenze: 6,
          xian: 3,
          yokohama: 4,
        },
      },
    ],
  },
  {
    id: 'q3',
    text: 'よく行く場所はどちらですか？',
    category: 'situation',
    options: [
      {
        text: 'カフェやショッピングモール',
        score: {
          paris: 6,
          prague: 4,
          perth: 5,
          turkey: 2,
          chongqing: 3,
          lijiang: 4,
          tokyo: 8,
          firenze: 3,
          xian: 4,
          yokohama: 7,
        },
      },
      {
        text: '美術館や歴史的建造物',
        score: {
          paris: 4,
          prague: 8,
          perth: 2,
          turkey: 6,
          chongqing: 5,
          lijiang: 7,
          tokyo: 2,
          firenze: 9,
          xian: 8,
          yokohama: 3,
        },
      },
    ],
  },
  {
    id: 'q4',
    text: '好きな色の傾向はどちらですか？',
    category: 'preference',
    options: [
      {
        text: '暖色系（オレンジ、レッド、イエロー）',
        score: {
          paris: 4,
          prague: 7,
          perth: 3,
          turkey: 9,
          chongqing: 8,
          lijiang: 5,
          tokyo: 4,
          firenze: 8,
          xian: 7,
          yokohama: 3,
        },
      },
      {
        text: '寒色系（ブルー、グリーン、パープル）',
        score: {
          paris: 6,
          prague: 3,
          perth: 7,
          turkey: 1,
          chongqing: 2,
          lijiang: 5,
          tokyo: 6,
          firenze: 2,
          xian: 3,
          yokohama: 7,
        },
      },
    ],
  },
  {
    id: 'q5',
    text: 'メイクで重視することはどちらですか？',
    category: 'preference',
    options: [
      {
        text: '上品で洗練された印象',
        score: {
          paris: 9,
          prague: 8,
          perth: 4,
          turkey: 5,
          chongqing: 6,
          lijiang: 7,
          tokyo: 7,
          firenze: 8,
          xian: 7,
          yokohama: 6,
        },
      },
      {
        text: '可愛らしく親しみやすい印象',
        score: {
          paris: 1,
          prague: 2,
          perth: 6,
          turkey: 4,
          chongqing: 4,
          lijiang: 3,
          tokyo: 3,
          firenze: 2,
          xian: 3,
          yokohama: 4,
        },
      },
    ],
  },
  {
    id: 'q6',
    text: '理想のデートの雰囲気はどちらですか？',
    category: 'situation',
    options: [
      {
        text: 'ロマンティックでエレガント',
        score: {
          paris: 9,
          prague: 7,
          perth: 3,
          turkey: 6,
          chongqing: 5,
          lijiang: 6,
          tokyo: 5,
          firenze: 8,
          xian: 6,
          yokohama: 4,
        },
      },
      {
        text: 'カジュアルで楽しい',
        score: {
          paris: 1,
          prague: 3,
          perth: 7,
          turkey: 4,
          chongqing: 5,
          lijiang: 4,
          tokyo: 5,
          firenze: 2,
          xian: 4,
          yokohama: 6,
        },
      },
    ],
  },
  {
    id: 'q7',
    text: '好きな季節はどちらですか？',
    category: 'preference',
    options: [
      {
        text: '春・秋（温かみのある季節）',
        score: {
          paris: 6,
          prague: 7,
          perth: 4,
          turkey: 8,
          chongqing: 7,
          lijiang: 6,
          tokyo: 8,
          firenze: 7,
          xian: 7,
          yokohama: 5,
        },
      },
      {
        text: '夏・冬（爽やか・クールな季節）',
        score: {
          paris: 4,
          prague: 3,
          perth: 6,
          turkey: 2,
          chongqing: 3,
          lijiang: 4,
          tokyo: 2,
          firenze: 3,
          xian: 3,
          yokohama: 5,
        },
      },
    ],
  },
  {
    id: 'q8',
    text: 'メイクの質感で好きなのはどちらですか？',
    category: 'preference',
    options: [
      {
        text: 'マットで落ち着いた質感',
        score: {
          paris: 7,
          prague: 8,
          perth: 5,
          turkey: 4,
          chongqing: 6,
          lijiang: 9,
          tokyo: 6,
          firenze: 6,
          xian: 7,
          yokohama: 6,
        },
      },
      {
        text: 'シマーやグリッターで華やかな質感',
        score: {
          paris: 3,
          prague: 2,
          perth: 5,
          turkey: 6,
          chongqing: 4,
          lijiang: 1,
          tokyo: 4,
          firenze: 4,
          xian: 3,
          yokohama: 4,
        },
      },
    ],
  },
  {
    id: 'q9',
    text: '旅行で行きたい場所の雰囲気はどちらですか？',
    category: 'situation',
    options: [
      {
        text: '歴史的で文化的な場所',
        score: {
          paris: 6,
          prague: 9,
          perth: 2,
          turkey: 7,
          chongqing: 6,
          lijiang: 8,
          tokyo: 4,
          firenze: 9,
          xian: 9,
          yokohama: 3,
        },
      },
      {
        text: 'モダンで都会的な場所',
        score: {
          paris: 4,
          prague: 1,
          perth: 6,
          turkey: 3,
          chongqing: 4,
          lijiang: 2,
          tokyo: 6,
          firenze: 1,
          xian: 1,
          yokohama: 7,
        },
      },
    ],
  },
];

// 質問IDで検索する関数
export const getQuestionById = (id: string): Question | undefined => {
  return questions.find(question => question.id === id);
};

// 全ての質問を取得する関数
export const getAllQuestions = (): Question[] => {
  return questions;
};

// カテゴリでフィルタリングする関数
export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter(question => question.category === category);
};
