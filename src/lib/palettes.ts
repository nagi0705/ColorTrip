import { PaletteInfo } from '../types';

// FOCALLURE GO TRAVEL 15色アイシャドウパレット - 10都市の情報
export const palettes: PaletteInfo[] = [
  {
    id: 'paris',
    name: 'パリ',
    nameEn: 'Paris',
    tagline: 'エレガントでロマンティックなパリの魅力',
    description: '温かみのあるブラウン・ゴールド・コッパー系を中心に、モーヴ・ベリー・オリーブグリーンがアクセント。エレガントで洗練された雰囲気を演出します。',
    imagePath: require('../../assets/images/01-paris.png'),
    personalColor: 'neutral',
    colorFeatures: {
      warm: 7,
      cool: 3,
      matte: 6,
      shimmer: 3,
      glitter: 1,
    },
    recommendedFor: [
      'エレガントなメイクが好きな方',
      'ロマンティックな雰囲気を演出したい方',
      '落ち着いた色合いを好む方',
    ],
    scenarios: ['デート', 'パーティー', '特別な日'],
  },
  {
    id: 'prague',
    name: 'プラハ',
    nameEn: 'Prague',
    tagline: '歴史ある中世ヨーロッパの美しさ',
    description: '暖色系のブラウン・ゴールド・コッパーが中心で、プラハの赤茶色の屋根や歴史的建造物を思わせるクラシックな配色。',
    imagePath: require('../../assets/images/02-prague.png'),
    personalColor: 'warm',
    colorFeatures: {
      warm: 8,
      cool: 2,
      matte: 5,
      shimmer: 4,
      glitter: 1,
    },
    recommendedFor: [
      'クラシックなメイクが好きな方',
      '歴史的な雰囲気を好む方',
      '暖色系が似合う方',
    ],
    scenarios: ['美術館', '歴史的建造物見学', '上品なランチ'],
  },
  {
    id: 'perth',
    name: 'パース',
    nameEn: 'Perth',
    tagline: 'オーストラリアの海と自然の爽やかさ',
    description: '海と自然のテーマで、暖色系と寒色系がバランス良く配置。ティール・ブルー・コーラルなど、オーストラリアの自然を表現。',
    imagePath: require('../../assets/images/03-perth.png'),
    personalColor: 'neutral',
    colorFeatures: {
      warm: 5,
      cool: 5,
      matte: 4,
      shimmer: 4,
      glitter: 2,
    },
    recommendedFor: [
      'アクティブな方',
      '自然を愛する方',
      '爽やかなメイクが好きな方',
    ],
    scenarios: ['海辺', 'アウトドア', 'カジュアルな外出'],
  },
  {
    id: 'turkey',
    name: 'トルコ',
    nameEn: 'Turkey',
    tagline: 'エキゾチックで情熱的なトルコの魅力',
    description: '温かみのあるアースカラー、テラコッタ、オレンジ、ブラウンを基調としつつ、ベリーやプラム系のアクセントカラーも含む。偏光グリッターが特徴的。',
    imagePath: require('../../assets/images/04-turkey.png'),
    personalColor: 'warm',
    colorFeatures: {
      warm: 9,
      cool: 1,
      matte: 5,
      shimmer: 3,
      glitter: 2,
    },
    recommendedFor: [
      'エキゾチックなメイクが好きな方',
      '情熱的な雰囲気を好む方',
      '暖色系が似合う方',
    ],
    scenarios: ['旅行', 'エスニックなイベント', '夕日の時間'],
  },
  {
    id: 'chongqing',
    name: '重慶',
    nameEn: 'Chongqing',
    tagline: '火鍋の街、重慶の温かみと情熱',
    description: '火鍋をテーマにした暖かみのあるゴールド、オレンジ、レッド系の色が豊富。パープルやダークグレーがクールなアクセント。',
    imagePath: require('../../assets/images/05-chongqing.png'),
    personalColor: 'warm',
    colorFeatures: {
      warm: 8,
      cool: 2,
      matte: 6,
      shimmer: 3,
      glitter: 1,
    },
    recommendedFor: [
      '温かみのあるメイクが好きな方',
      '情熱的な雰囲気を好む方',
      '中華文化に興味がある方',
    ],
    scenarios: ['中華料理店', '暖かい雰囲気の場所', '秋のイベント'],
  },
  {
    id: 'lijiang',
    name: '麗江',
    nameEn: 'Lijiang',
    tagline: '中国古都の古き良き美しさ',
    description: '抹茶色・マット系の色で古都の美しさを表現し、煌びやかなラメで古都の華やかさ・歴史の輝きを演出。',
    imagePath: require('../../assets/images/06-lijiang.png'),
    personalColor: 'neutral',
    colorFeatures: {
      warm: 6,
      cool: 4,
      matte: 7,
      shimmer: 2,
      glitter: 1,
    },
    recommendedFor: [
      '落ち着いた雰囲気を好む方',
      '伝統的な美しさが好きな方',
      '歴史を感じたい方',
    ],
    scenarios: ['伝統的な場所', '落ち着いた雰囲気', '歴史的建造物'],
  },
  {
    id: 'tokyo',
    name: '東京',
    nameEn: 'Tokyo',
    tagline: 'モダンで可愛らしい東京の魅力',
    description: '桜をテーマにしたピンク、ピーチ、ブラウンを基調としつつ、ゴールドやグリッター、深みのあるプラム系も含む。可愛らしく洗練された配色。',
    imagePath: require('../../assets/images/07-tokyo.png'),
    personalColor: 'neutral',
    colorFeatures: {
      warm: 6,
      cool: 4,
      matte: 5,
      shimmer: 3,
      glitter: 2,
    },
    recommendedFor: [
      '可愛らしいメイクが好きな方',
      'モダンな雰囲気を好む方',
      '都会的なスタイルが好きな方',
    ],
    scenarios: ['お花見', 'カフェ', 'ショッピング'],
  },
  {
    id: 'firenze',
    name: 'フィレンツェ',
    nameEn: 'Firenze',
    tagline: 'ルネサンスの芸術都市フィレンツェ',
    description: 'オレンジ、テラコッタ、ゴールドを中心とした暖色系。ルネサンス芸術を思わせる温かく芸術的な配色。',
    imagePath: require('../../assets/images/08-firenze.png'),
    personalColor: 'warm',
    colorFeatures: {
      warm: 9,
      cool: 1,
      matte: 6,
      shimmer: 3,
      glitter: 1,
    },
    recommendedFor: [
      '芸術的なメイクが好きな方',
      '温かい色合いを好む方',
      '文化的な雰囲気を好む方',
    ],
    scenarios: ['美術館', '芸術鑑賞', '文化的なイベント'],
  },
  {
    id: 'xian',
    name: '西安',
    nameEn: 'Xi\'an',
    tagline: '古都西安の歴史と伝統',
    description: 'ゴールド、ブラウン、テラコッタを中心とした暖色系。中国の古都を思わせる歴史的で豊かな配色。',
    imagePath: require('../../assets/images/09-xian.png'),
    personalColor: 'warm',
    colorFeatures: {
      warm: 8,
      cool: 2,
      matte: 6,
      shimmer: 3,
      glitter: 1,
    },
    recommendedFor: [
      '歴史的な雰囲気を好む方',
      '伝統的なメイクが好きな方',
      '暖色系が似合う方',
    ],
    scenarios: ['歴史的建造物', '伝統的なイベント', '文化的な場所'],
  },
  {
    id: 'yokohama',
    name: '横浜',
    nameEn: 'Yokohama',
    tagline: '港町横浜の多様で爽やかな表情',
    description: 'ブルー、ブラウン、コーラルがバランス良く配置された港町らしい多様な配色。爽やかでモダンな印象。',
    imagePath: require('../../assets/images/10-yokohama.png'),
    personalColor: 'neutral',
    colorFeatures: {
      warm: 5,
      cool: 5,
      matte: 5,
      shimmer: 3,
      glitter: 2,
    },
    recommendedFor: [
      '爽やかなメイクが好きな方',
      'モダンな雰囲気を好む方',
      '多様な表情を楽しみたい方',
    ],
    scenarios: ['港町散策', 'モダンな場所', '爽やかな外出'],
  },
];

// パレットIDで検索する関数
export const getPaletteById = (id: string): PaletteInfo | undefined => {
  return palettes.find(palette => palette.id === id);
};

// パーソナルカラーでフィルタリングする関数
export const getPalettesByPersonalColor = (personalColor: string): PaletteInfo[] => {
  return palettes.filter(palette => palette.personalColor === personalColor);
};

// 全てのパレットを取得する関数
export const getAllPalettes = (): PaletteInfo[] => {
  return palettes;
};
