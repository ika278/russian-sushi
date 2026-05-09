# ブランチ戦略

GitHub Flow をベースにしたシンプルな運用。

## ブランチ構成

```
main
└── feature/xxx
└── fix/xxx
```

| ブランチ | 役割 |
|---|---|
| `main` | 本番。GitHub Pages に自動デプロイされる |
| `feature/xxx` | 機能追加 |
| `fix/xxx` | バグ修正 |

## ルール

- `main` は常にデプロイ可能な状態を保つ
- 作業は必ずブランチを切ってから行う
- マージ後はブランチを削除する

## 作業フロー

```
1. /new-feature <名前>   # feature ブランチを作成
2. 作業・コミット
3. /finish-feature       # PR を作成
4. PR をレビュー・マージ（GitHub 上で行う）
```

## ブランチ名の例

| 種類 | 例 |
|---|---|
| 機能追加 | `feature/add-sound-effects` |
| UI改善 | `feature/improve-result-screen` |
| バグ修正 | `fix/wasabi-not-random` |
