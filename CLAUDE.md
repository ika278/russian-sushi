# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**ロシアン寿司** — 10貫の寿司から順番に1つずつ選び、ワサビ入りを引いた人が負けになるWebゲーム。
罰ゲームを決める場面などで複数人がスマートフォンを回しながらカジュアルに遊ぶことを想定。

- 要件定義: `docs/requirements/mvp.md`

## ゲーム仕様

- 寿司10貫、ワサビ1貫（ランダム配置）
- プレイヤーが順番にタップして選択（デバイスを回して使用）
- ワサビ以外 → 「SAFE」オーバーレイを約1秒表示後、ゲーム継続
- ワサビ当選 → 「OUT!」リザルト画面へ遷移、リスタート可能
- プレイヤー名・人数管理なし（口頭で管理）

## 技術スタック

| 役割 | ライブラリ |
|------|-----------|
| フレームワーク | React + TypeScript |
| ビルドツール | Vite |
| スタイリング | Tailwind CSS |
| アニメーション | Framer Motion |

## 技術方針

- **フロントエンドのみ**（バックエンド・DB不要）
- モバイルファースト、UI/UX重視
- ホスティングは **GitHub Pages**
- デプロイは GitHub Actions で自動化
