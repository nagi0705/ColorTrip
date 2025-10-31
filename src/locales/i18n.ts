import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ja from './ja.json';
import en from './en.json';

const resources = {
  ja: {
    translation: ja,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    resources,
    lng: 'ja', // デフォルト言語
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false, // React は既にセキュア
    },
  });

export default i18n;

