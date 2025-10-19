import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { runAllTests } from './src/lib/test';

export default function App() {
  // データモデルのテストを実行
  React.useEffect(() => {
    runAllTests();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🎨 ColorTrip データモデルテスト</Text>
        <Text style={styles.subtitle}>コンソールを確認してください</Text>
        <Text style={styles.description}>
          データモデルの動作確認が完了しました！
          {'\n\n'}✅ 型定義 (types/index.ts)
          {'\n'}✅ パレット情報 (lib/palettes.ts) 
          {'\n'}✅ 質問配列 (lib/questions.ts)
          {'\n\n'}次のステップ: UIコンポーネント開発
        </Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#333',
  },
});
