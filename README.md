# 電子レンジ 温め時間変換器

食品パッケージに記載されている電子レンジの温め時間を、お使いの電子レンジのワット数に合わせて変換するツールです。

## 機能

- パッケージ記載のワット数と時間から、お使いの電子レンジでの適切な温め時間を計算
- よく使用されるワット数（500W, 600W, 700W, 800W）をワンタッチで入力可能
- 分秒での時間入力と表示に対応
- [Vercel Analytics](https://vercel.com/analytics) による利用状況の分析

## 計算方法

以下の計算式で温め時間を算出します：

```
実際の温め時間 = 記載されたワット数 ÷ お使いの電子レンジのワット数 × 記載された温め時間
```

## 技術スタック

- [Svelte](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [@vercel/analytics](https://www.npmjs.com/package/@vercel/analytics)

## 開発環境のセットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

## プロジェクト構成

```
src/
├── lib/
│   ├── components/
│   │   ├── MicrowaveCalculator.svelte  # 入力フォームコンポーネント
│   │   └── ResultDisplay.svelte        # 計算結果表示コンポーネント
│   ├── utils/
│   │   └── calculator.ts               # 計算ロジック
│   └── types.ts                        # 型定義
└── App.svelte                          # メインコンポーネント
```

## デザイン仕様

- レスポンシブ対応（モバイルファースト）
- 最大幅400pxのカードベースのレイアウト
- アクセシブルなフォームデザイン
- 視認性の高い計算結果の表示

## 分析

Vercel Analytics を使用して、以下の情報を収集・分析しています：

- ページビュー数
- 訪問者数
- デバイス情報
- 地域情報

収集したデータは、サービスの改善のみに使用します。

## ライセンス

MIT
