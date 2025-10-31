# ColorTrip スタイルガイド

## 概要

ColorTrip アプリでは、統一されたデザインシステムを使用しています。テーマ定義、ダークモード対応、再利用可能なスタイルコンポーネントが提供されています。

## ファイル構成

- `theme.ts` - カラー、スペーシング、タイポグラフィ、シャドウなどのテーマ定義
- `ThemeContext.tsx` - ダークモード切り替え機能

## テーマの使用

### 基本的な使用

```typescript
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from "../styles/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    ...shadows.md,
  },
  title: {
    fontSize: typography.fontSize["2xl"],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
});
```

### ダークモード対応

```typescript
import { useTheme } from "../context/ThemeContext";
import { getCurrentTheme } from "../styles/theme";

const MyComponent = () => {
  const { mode } = useTheme();
  const theme = getCurrentTheme(mode);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      padding: theme.spacing.lg,
    },
  });

  return <View style={styles.container}>...</View>;
};
```

### テーマ切り替え

```typescript
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <Button onPress={toggleTheme}>
      {isDark ? "ライトモード" : "ダークモード"}
    </Button>
  );
};
```

## カラーパレット

### プライマリカラー

- `primary`: メインのブランドカラー（紫）
- `primaryLight`: 明るいピンク
- `primaryDark`: ダークピンク

### セカンダリカラー

- `secondary`: ターコイズ
- `secondaryLight`: スカイブルー
- `secondaryDark`: ミントグリーン

### アクセントカラー

- `accent`: ゴールド
- `accentLight`: イエロー
- `accentDark`: ピンク

### グラデーション

- `gradient.primary`: レインボーグラデーション
- `gradient.home`: ホーム画面用
- `gradient.question`: 質問画面用

## スペーシング

標準的なスペーシング値：

- `xs`: 4
- `sm`: 8
- `md`: 12
- `lg`: 16
- `xl`: 20
- `2xl`: 24
- `3xl`: 32

## タイポグラフィ

### フォントサイズ

```typescript
fontSize: {
  xs: 10,
  sm: 12,
  base: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
}
```

### フォントウェイト

- `normal`: 400
- `medium`: 500
- `semibold`: 600
- `bold`: 700

## シャドウ

標準的なシャドウ：

- `sm`: 小さいシャドウ
- `md`: 中程度のシャドウ
- `lg`: 大きなシャドウ
- `xl`: 特大のシャドウ
- `pink`: ピンク色のシャドウ

使用例：

```typescript
const styles = StyleSheet.create({
  card: {
    ...shadows.md,
    borderRadius: borderRadius.lg,
  },
});
```

## ダークモード対応

アプリはダークモードをサポートしています。すべてのカラーにダークモード用のバリエーションが用意されています。

```typescript
const { isDark, toggleTheme } = useTheme();
```

## ベストプラクティス

1. **ハードコードされた色を避ける**: 常にテーマ定義から色を取得する
2. **一貫性を保つ**: スペーシングとタイポグラフィはテーマ定義を使用
3. **再利用性**: 共通スタイルはコンポーネント化する
4. **アクセシビリティ**: コントラスト比を確保する

## 今後の改善

- [ ] NativeWind の導入（React Native で Tailwind 風の書き方）
- [ ] アニメーション定義の追加
- [ ] レスポンシブ対応の強化
- [ ] カスタムフォントのサポート
