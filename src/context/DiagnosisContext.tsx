import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Answer, DiagnosisResult } from '../types';

interface DiagnosisContextType {
  // 現在の回答状態
  answers: Answer[];
  
  // 診断結果
  results: DiagnosisResult[];
  
  // 診断開始時刻
  startTime: Date | null;
  
  // 診断終了時刻
  endTime: Date | null;
  
  // アクション
  setAnswers: (answers: Answer[]) => void;
  setResults: (results: DiagnosisResult[]) => void;
  startDiagnosis: () => void;
  endDiagnosis: () => void;
  resetDiagnosis: () => void;
  
  // 診断進行状況
  isDiagnosing: boolean;
  hasResults: boolean;
}

const DiagnosisContext = createContext<DiagnosisContextType | undefined>(undefined);

interface DiagnosisProviderProps {
  children: ReactNode;
}

export const DiagnosisProvider: React.FC<DiagnosisProviderProps> = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<DiagnosisResult[]>([]);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const startDiagnosis = () => {
    setStartTime(new Date());
    setEndTime(null);
    setAnswers([]);
    setResults([]);
  };

  const endDiagnosis = () => {
    setEndTime(new Date());
  };

  const resetDiagnosis = () => {
    setAnswers([]);
    setResults([]);
    setStartTime(null);
    setEndTime(null);
  };

  const value: DiagnosisContextType = {
    answers,
    results,
    startTime,
    endTime,
    setAnswers,
    setResults,
    startDiagnosis,
    endDiagnosis,
    resetDiagnosis,
    isDiagnosing: startTime !== null && endTime === null,
    hasResults: results.length > 0,
  };

  return (
    <DiagnosisContext.Provider value={value}>
      {children}
    </DiagnosisContext.Provider>
  );
};

export const useDiagnosis = (): DiagnosisContextType => {
  const context = useContext(DiagnosisContext);
  if (context === undefined) {
    throw new Error('useDiagnosis must be used within a DiagnosisProvider');
  }
  return context;
};

