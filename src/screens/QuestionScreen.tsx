import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Button } from '../components/Button';
import { RadioCard } from '../components/RadioCard';
import { ProgressBar } from '../components/ProgressBar';
import { getAllQuestions } from '../lib/questions';
import { Answer } from '../types';

type QuestionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Question'>;

interface QuestionScreenProps {
  navigation: QuestionScreenNavigationProp;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({ navigation }) => {
  const questions = getAllQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canGoNext = selectedOption !== null;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    // 現在の回答を保存
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      selectedOptionIndex: selectedOption,
    };

    const updatedAnswers = [...answers];
    const existingAnswerIndex = updatedAnswers.findIndex(
      (a) => a.questionId === currentQuestion.id
    );

    if (existingAnswerIndex >= 0) {
      updatedAnswers[existingAnswerIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }

    setAnswers(updatedAnswers);

    if (isLastQuestion) {
      // 最後の質問なら結果画面へ
      navigation.navigate('Result', { answers: updatedAnswers });
    } else {
      // 次の質問へ
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // 前の回答を復元
      const previousAnswer = answers.find(
        (a) => a.questionId === questions[currentQuestionIndex - 1].id
      );
      setSelectedOption(previousAnswer?.selectedOptionIndex ?? null);
    } else {
      // 最初の質問ならホームに戻る
      navigation.goBack();
    }
  };

  const getCategoryLabel = (category: string): string => {
    switch (category) {
      case 'personal-color':
        return 'パーソナルカラー';
      case 'preference':
        return '好み';
      case 'situation':
        return 'シチュエーション';
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFE5F1', '#FFF5E5', '#FFFFE5', '#E5FFF5', '#E5F5FF', '#F5E5FF']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          {/* プログレスバー */}
          <View style={styles.progressContainer}>
            <ProgressBar
              currentStep={currentQuestionIndex + 1}
              totalSteps={questions.length}
              showText={true}
            />
          </View>

          {/* 質問内容 */}
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.questionContainer}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>
                  {getCategoryLabel(currentQuestion.category)}
                </Text>
              </View>
              
              <Text style={styles.questionNumber}>
                質問 {currentQuestionIndex + 1}
              </Text>
              
              <Text style={styles.questionText}>
                {currentQuestion.text}
              </Text>
            </View>

            {/* 選択肢 */}
            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((option, index) => (
                <RadioCard
                  key={index}
                  title={option.text}
                  selected={selectedOption === index}
                  onPress={() => handleOptionSelect(index)}
                />
              ))}
            </View>
          </ScrollView>

          {/* ナビゲーションボタン */}
          <View style={styles.navigation}>
            <Button
              title="戻る"
              onPress={handleBack}
              variant="secondary"
              size="medium"
              style={styles.backButton}
            />
            <Button
              title={isLastQuestion ? '結果を見る' : '次へ'}
              onPress={handleNext}
              variant="primary"
              size="medium"
              disabled={!canGoNext}
              style={styles.nextButton}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  progressContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 182, 193, 0.3)',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  questionContainer: {
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#FFB6C1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FF6B9D',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B9D',
    marginBottom: 12,
  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3748',
    lineHeight: 32,
  },
  optionsContainer: {
    marginBottom: 16,
  },
  navigation: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 182, 193, 0.3)',
    gap: 16,
  },
  backButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FFB6C1',
  },
  nextButton: {
    flex: 2,
    backgroundColor: '#FF6B9D',
    shadowColor: '#FF6B9D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
});

