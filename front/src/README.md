✅ディレクトリ構成

📁src
├📝index.tsx：ベース。Appにstoreを組み込んで表示。
├📁components：表示部分※useSelectorなど関数に型定義
│├📝App.tsx：Appコンポーネント
│├📝Address.tsx：住所
│├📝Basic.tsx：基本情報
│├📝Profile.tsx：プロフィール全体のレイアウトや保存の処理
│├📝College.tsx：学歴
│└📝Career.tsx：職歴
├📁domain/entity：TSのデータ型定義  ※domainは領域、entityは概念
│├📝alert.ts
│├📝proile.ts：ここにプロフィールの型を集約※Profileでエクスポート
│├📝gender.ts
│├📝address.ts
│├📝career.ts
│├📝college.ts
│├📝validation.ts：全てのProfileの入力値に対応
│└📝rootState.ts：全ての型定義をエクスポート、storeの型
├📁domain/services：ロジックの定義(ラベルの定数の定義/正規表現)
│├📝profile.ts：各項目名※PROFILEでエクスポート。タグ内のvalue属性などに利用。
│├📝address.ts：郵便番号の正規表現※APIの自動補完周りのロジック
│└📝career.ts：空の職歴がないかどうか判定するロジック
└📁store：状態管理(actions.ts,reducer.tsを各ファイルに生成)※TS型適用。
  ├📁alert
  │├📝actions.ts
  │└📝reducer.ts
  ├📁colleges
  │├📝actions.ts
  │├📝reducer.ts
  │└📝effects.ts：非同期アクションの実装
  ├📁profile
  │├📝actions.ts
  │├📝reducer.ts
  │└📝effects.ts：非同期アクションの実装
  ├📁validation
  │├📝actions.ts
  │├📝reducer.ts
  └📝index.ts：1つにstoreをまとめてエクスポート

✅制作手法
・re-ducksパターン
機能毎にディレクトリを訳、その中で関数の種類ごとにファイルを分ける。

※ducksパターンだと大規模開発で読みづらくなるため考案。機能ではなくデータで分類すること推奨。

・ducksパターン
modulesディレクトリ下で管理。
actionType,action,reducerは蜜結合なのでまとめたファイルを1モジュールとする。

・一般的なパターン
関数の種類ごとにactions,reducers,typesディレクトリで分け、同名のファイルが点在する。


✅material-uiで使ったコンポーネント
※material-uiコンポーネントのタグ内に描画情報を入れてる。

📝Basic.tsx
  TextField、Radio
📝Profile.tsx
  Typography、Container

✅使ったフック

Redux-hooks
useSelector()：connectを不要にする
useDispatch()：reduxの状態を更新するdispatchの関数を作ってくれるフック
👉components/basic.tsxで呼び出ししている。

✅Redux DevToolの活用

✅APIの採用
PostalcodeJP API
学校検索API

4-3 CORS

serverディレクトリ
yarn install
yarn env
yarn start
curl http://localhost:18001/hc