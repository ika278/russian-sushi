feature ブランチを作成します。以下の手順で実行してください。

引数: $ARGUMENTS（ブランチ名。例: `add-sound-effects`）

1. 引数が指定されていない場合は、何を実装するか確認する
2. `git status` で未コミットの変更がないことを確認する（ある場合はユーザーに確認する）
3. `git checkout main` で main に切り替える
4. `git pull origin main` で最新状態に更新する
5. `git checkout -b feature/<引数>` でブランチを作成する
6. `git push -u origin feature/<引数>` で push する
7. 現在のブランチ名を表示して完了を伝える
