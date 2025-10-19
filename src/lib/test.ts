// データモデルの動作確認用テストファイル
import { getAllPalettes, getPaletteById } from './palettes';
import { getAllQuestions, getQuestionById } from './questions';

// パレットデータのテスト
export const testPalettes = () => {
  console.log('=== パレットデータテスト ===');
  
  // 全パレット取得
  const palettes = getAllPalettes();
  console.log(`全パレット数: ${palettes.length}`);
  
  // 各パレットの基本情報を表示
  palettes.forEach(palette => {
    console.log(`${palette.id}: ${palette.name} (${palette.nameEn})`);
    console.log(`  - ${palette.tagline}`);
    console.log(`  - パーソナルカラー: ${palette.personalColor}`);
    console.log(`  - 推奨対象: ${palette.recommendedFor.join(', ')}`);
  });
  
  // 特定のパレット取得テスト
  const parisPalette = getPaletteById('paris');
  if (parisPalette) {
    console.log('\n=== パリパレット詳細 ===');
    console.log(`名前: ${parisPalette.name}`);
    console.log(`説明: ${parisPalette.description}`);
    console.log(`色の特徴:`, parisPalette.colorFeatures);
  }
};

// 質問データのテスト
export const testQuestions = () => {
  console.log('\n=== 質問データテスト ===');
  
  // 全質問取得
  const questions = getAllQuestions();
  console.log(`全質問数: ${questions.length}`);
  
  // 各質問の基本情報を表示
  questions.forEach(question => {
    console.log(`${question.id}: ${question.text}`);
    console.log(`  カテゴリ: ${question.category}`);
    console.log(`  選択肢数: ${question.options.length}`);
  });
  
  // 特定の質問取得テスト
  const firstQuestion = getQuestionById('q1');
  if (firstQuestion) {
    console.log('\n=== 最初の質問詳細 ===');
    console.log(`質問: ${firstQuestion.text}`);
    console.log('選択肢:');
    firstQuestion.options.forEach((option, index) => {
      console.log(`  ${index + 1}. ${option.text}`);
      console.log(`     スコア例: パリ=${option.score.paris}, トルコ=${option.score.turkey}`);
    });
  }
};

// 診断ロジックのテスト
export const testDiagnosisLogic = () => {
  console.log('\n=== 診断ロジックテスト ===');
  
  // サンプル回答（全て最初の選択肢を選んだ場合）
  const sampleAnswers = [
    { questionId: 'q1', selectedOptionIndex: 0 },
    { questionId: 'q2', selectedOptionIndex: 0 },
    { questionId: 'q3', selectedOptionIndex: 0 },
    { questionId: 'q4', selectedOptionIndex: 0 },
    { questionId: 'q5', selectedOptionIndex: 0 },
    { questionId: 'q6', selectedOptionIndex: 0 },
    { questionId: 'q7', selectedOptionIndex: 0 },
    { questionId: 'q8', selectedOptionIndex: 0 },
    { questionId: 'q9', selectedOptionIndex: 0 },
  ];
  
  // スコア計算
  const scores: Record<string, number> = {};
  const questions = getAllQuestions();
  
  sampleAnswers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question && question.options[answer.selectedOptionIndex]) {
      const option = question.options[answer.selectedOptionIndex];
      Object.keys(option.score).forEach(paletteId => {
        scores[paletteId] = (scores[paletteId] || 0) + option.score[paletteId];
      });
    }
  });
  
  // 結果表示
  console.log('サンプル回答でのスコア:');
  Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .forEach(([paletteId, score]) => {
      const palette = getPaletteById(paletteId);
      console.log(`${palette?.name}: ${score}点`);
    });
};

// 全テスト実行
export const runAllTests = () => {
  testPalettes();
  testQuestions();
  testDiagnosisLogic();
  console.log('\n=== 全テスト完了 ===');
};
