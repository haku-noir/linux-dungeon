# Linux Dungeon

高専の文化祭で中学生向けに作ったLinuxのコマンドを学べる探索ゲームです。
ダンジョンでキャラを動かして宝（Linuxのコマンドや知識）を探し、部屋に入ってLinuxについての問題を解くことでスコアを獲得できます。

<img width="1482" alt="start" src="https://user-images.githubusercontent.com/52265154/158302192-dede365e-d29a-47d3-8a1a-c450bda3946b.png">
<img width="1482" alt="dungeon" src="https://user-images.githubusercontent.com/52265154/158302204-9daf9bab-677f-4f10-949c-826f8f065603.png">

### 宝
宝箱から獲得できます。
「ls」や「cat」といったコマンドや「ワイルドカード」などの説明が書かれています。
手に入れた宝は、画面下の赤いボタンをクリックするといつでも確認することができます。

<img width="1482" alt="treasure" src="https://user-images.githubusercontent.com/52265154/158302347-b2a8be0c-f8b9-43f0-b31c-8d56fcbb48a1.png">

### 部屋
部屋に入ると問題が表示されます。
「ファイルの中身を表示するコマンドは？」のように知識を問う問題ではなく、「XXXファイルには何が書かれている？」という実際にコマンドを実行して答えを探す問題です。
文化祭では、Webサーバの他に用意したSSHサーバ（CentOS7）に、TeraTermからSSHしてコマンドを実行してもらいました。また、部屋ごとに決められたコマンド（「Stage1_1」など）を最初に実行してもらうことで、問題のディレクトリに自動で移動するようにしました。

<img width="1482" alt="room" src="https://user-images.githubusercontent.com/52265154/158302368-7ec5defd-bfb5-4971-a59b-86c96cf72117.png">

## ゲームの流れ
1. ダンジョンで宝を集め、部屋に入る
2. 集めた宝のコマンドや知識を組み合わせて、部屋の問題に挑戦
3. Linux（ターミナル）でコマンドを実行して、答えを探す
4. 正解ならスコアゲット！ ダンジョンに戻って探索再開

<b>ダンジョンとLinuxの両方を探索していくことで、Linuxコマンドを学ぶことができます。</b>

## 設計資料

### 全体の構成
![全体図](https://user-images.githubusercontent.com/52265154/158303945-895307da-6890-4d93-a842-f90503b2b2f4.png)

### Webアプリのページ遷移図
![画面構成](https://user-images.githubusercontent.com/52265154/158303886-f695a5b6-7c07-422c-afe1-eaa89544bfe6.png)

### ダンジョンページの構成
![探索画面](https://user-images.githubusercontent.com/52265154/158304002-7e9dc0d9-29fe-423e-add3-0984b9223e1a.png)

## 起動方法（WebアプリのみでSSHサーバは含まれていません）

```
git clone https://github.com/haku-noir/linux-dungeon.git
cd linux-dungeon/app
npm install
docker-compose up -d --build
docker exec -it linux-dungeon_app npm start
```

### 終了方法

```
docker-compose down
```
