# 新しいプロジェクトの作り方
- test/basic-pageのブランチの内容をコピーしてはじめること

**ブランチの最新状態をローカルリポジトリに取得**

```shell
git fetch
```

**`test/basic-page` ブランチに切り替え**

```shell
git checkout test/basic-page
```

**`test/basic-page` ブランチを最新の状態に更新**

```shell
git pull origin text/basic-page
```

**新しいブランチを作成し `test/basic-page` で初期化**

```shell
git checkout -b new-branch
```

**新しいブランチをリモートリポジトリにプッシュ**

```shell
git push -u origin new-branch
```

# デプロイについて

**`package.json`**

```json
{
  "name": "practice-react",
   // 以下の test-basic-page を変更
  "homepage": "https://pss-aileen.github.io/practice-react/test-basic-page",
  //...
  "scripts": {
    // 以下の test-basic-page を変更
    "deploy": "npm run build && gh-pages -d build -m \"Updates --skip-ci\" -e \"test-basic-page\"",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  },
}
```


**以下でgh-pagesブランチにデプロイ**

```shell
npm run deploy
```

- デフォルト設定の `gh-pages` ブランチにビルドして、ファイルがアップロードされる

