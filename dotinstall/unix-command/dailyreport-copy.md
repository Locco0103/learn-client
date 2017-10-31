dotinstall unixコマンド
#6
lesson に myapp ディレクトリ作成
作成できたか確認
myapp2 を再帰的にコピー
myapp3 内に confi ディレクトリを作成（同時にmyapp3 も作る）
myapp3をmyapp2 に丸ごと移動
移動せずに config ディレクトリを削除
myapp2 を再帰的に削除

#7
（hello.txt をmyapp内に作成
hello.txt 中身を見る
hello.txt 別画面で中身を見る
  １ページ進む
  １ページ戻る
  先頭に戻る
  末尾に進む
  終了する
hello.txt を今のディレクトリにコピー
ファイルの名前の変更 hello.txt -> hello2.txt
hello2.txt を削除

#8
（bash（シェル） の便利機能）
ディレクトリ名補完
コマンドを補完
何かを中止したければ、control + c
control + r 最近のコマンドを検索

#9
(history)コマンドの履歴を見れる
履歴を呼び出そう
一つ前を呼び出そう
二つ前
終了
（引数）
myapp ディレクトリの中身を確認したあと
前のコマンドの場所へ移動する
コマンドを途中まで打って実行
コマンドを途中まで打って実行せず、コマンド名を検索
前のコマンドを実行

#10
### コマンドを詳しく見てみる
- オプションとして ```--help(実行できなかった)```
- コマンドとして ```$ man mkdir```
- コマンド詳細内検索 ``` / ```

##11
### vim
- コマンドモード で開く ```$ vi hello.txt```
- 編集モードへ変更　insert mode ```i```
- コマンドモードで保存 ```:w```
- コマンドモードで終了 ```:q```
- 間違って編集モードでx をタイプ ```x``` カーソルのテキスト削除
- 保存しないで終了  ```:q!```

## 12
### シンボリックリンク
毎回長いリンクを呼び出すのは大変なので、名前をつける
- myapp ディレクトリ内に config production database というディレクトリ構成を作成  
```$ mkdir -p config/production/database```  
- dbconfig という名前でシンボリックリンクを作成しよう  
```$ ln -s config/production/database dbconfig```  
- myapp の詳細を見てみよう（一行ずつ）  
```$ ls -l```  
- database 内に空ファイル commands.sql を作成してみよう  
```$ touch dbconfig/commands.sql```  
- commands.spl を削除  
```$ rm dbconfig/commands.sql```  
- シンボリックリンクを削除  
```$ unlink dbconfig```  

##14 / 15
### パーミッションの変更 / 二進数によるパーミッションの変更
chmod g+x sample

##16
### コマンドを作ってみよう
- hi というコマンドがあるかをチェック ```$ type hi```
- cat というコマンドがあるかもチェック ```$ type cat```
- myapp 内に hi というコマンドを作成(コマンドモードで表示)```$ vi hi```
- 編集モードへ変更 
- bash を用いてコマンド作成
```
#!/bin/bash
echo "hi!"
```
- 保存と終了を同時に行う
- hi の実行権限を確認 ```$ ls -l```
- user のパーミッションを実行可能に変更 ```$ chmod u+x hi```
- hi を実行してみよう ```$ ./hi```

##17
自作コマンドを実行するのにパスを指定しなければならない
-> PATH を通してみよう
PATH という環境変数があり、シェルがそこからコマンドを見つけている。

## 18
### 管理者ユーザー
su : substitute user / root user への切り替えに使う
sudo : 一時的な管理者権限？

## 19
### chown / change owner
ログファイル

## 20
### いろんなコマンド
- ファイルの　行数　単語数　バイト数　ファイル名　を見てみよう
```$ wc hoge.md```
- 行数だけを見てみよう
```$ wc -l hoge.md```
- ファイルの先頭だけみてみよう
```$ head hoge.md```
- 3行だけ見てみよう
```$ head -3 hoge.md```
- ファイルの末尾だけみてみよう
```$ tail hoge.md```
- 3行だけ見てみよう
```$ tail -3 hoge.md```
- 文字列の検索をしてみよう
```$ grep 'hoge' hoge.md```

## 21
### いろんなコマンド　続き
- 空ファイル「cmd.txt 」「result.txt」を作成しよう
```$ touch cmd.txt```
- date を先頭に書き込む
```$ echo 'date' > cmd.txt```
- free を末尾に書き込む
```$ echo 'free' >> cmd.txt```
- cmd.txt の中身を確認
```$ cat cmd.txt```
- シェル君（bash）に cmd.txt 内を渡す(date free はコマンド)
```$ bash < cmd.txt```
- 受け取ったコマンドを実行した結果を result.txt に書き込もう
```$ bash < cmd.txt > result.txt```
- result.txt の中身を確認
```$ cat result.txt```

#### コマンドの連結
- [unix-command] ディレクトリから 「txt」 という文字列のあるファイルを抜きだそう
```$ ls -l | grep 'txt'```
- さらにそれがいくつあるのかを確認しよう
```$ ls -l | grep 'txt' | wc -l```

## 24
#### bash ブレース展開
- bash で a b c を表示してみよう
```$ echo {a,b,c}```
- bash で 1 2 3 ... 10 を表示してみよう
```$ echo {1..10}```
- bash で 1a 2a ... 10a 1b 2b ... 10g を表示してみよう
```$ echo {1..10}{a..g}```
- ディレクトリ 「test」 を作成し、そのままそれを作業ディレクトリへ
```$ mkdir test && cd test```
- ブレース展開を使って、app1 app2 ... app5 ディレクトリを作成しよう
```$ mkdir app{1..5}```
- 各ディレクトリ内に test1-3 まで について txt jpeg gif ファイルを作成しよう
```$ touch test{1..3}{.txt,.jpeg,.gif}```
- jpeg gif ファイルを削除しよう
```$ rm test{1..3}{.jpeg,.gif}```

### gulp
#### 概要
Node.js のパッケージの一つ
#### package.json
- ディレクトリ mysite を作成し、移動
```$ mkdir mysite && cd mysite```
- packgae.json をnpm を用い mysite に作成
```$ npm init
- gulp をディレクトリ mysite に作成
```$ npm install --save-dev gulp```
```--save-dev``` : package.json に gulpを使うという情報をいれてくれる
- 短縮系でも書いてみよう
```$ npm i -D gulp```
node_modules ディレクトリが生成される

package.json 内にモジュールの情報が入る。
つまり、
package.json を渡すだけ同じ環境を作れる


### gulp task()
- gulpfile.js ファイルの作成
```$ touch gulpfile.js```
- 変数gulp に gulp を読み込む
```var gulp = require('gulp');```
- タスク名 hello で、コンソールに 'hello world!'
``` 
gulp.task('hello',function(){
  console.log('hello world!');
});
```
- コマンドラインで、タスクを呼び出す
```$ gulp hello```
- gulp だけで呼び出せるように タスク hello をデフォルト値にしよう
```
gulp.task('default',['hello']);
```

### gulp src
src : 操作対象となるファイルを指定する
- src ディレクトリの中に index.html ファイルを作成
```
$ mkdir src
$ touch index.html
```
- task 名を html に変更する
- task html のメソッドを書いていく。
    - index.html ファイルを取得
    - dist (distribution) へコピー
```
gulp.task('html',function(){
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
})
```
destメソッド：destination

### タスクの実行順序　複数のタスク
- msg というタスクを追加
- コンソールで html copy done!
```
gulp.task('msg',function(){
  console.log('html copy done!');
})
```
- default でふたつのタスクを実行する　（しかしこれでは順序が逆になる可能性もある）
```
gulp.task('default',['html','msg']);
```
- タスク html が終了したら タスクmsg を実行させる
```
gulp.task('msg',['html'],function(){
  console.log('html copy done!');
})
```
- タスク html に返り値を設定
```
 retrun gulp.task('html',function(){
    gulp.src('./src/index.html')
      .pipe(gulp.dest('./dist'));
  })
```

### 画像を圧縮・最適化して、別フォルダへコピー
- html のタスクのみにする
- 画像の最適化をするプラグインをインストール
```
$ npm install --save-dev gulp-imagemin
or
$ npm i -D gulp-imagemin
```
- gulpfile.js で 画像の最適化のプラグインを読み込む変数を作成
```var imageMin = require('gulp-imagemin');```
- img タスクの作成
    - src img ディレクトリに画像を入れる
    - すべての画像のソースを取得
    - コピー先のディレクトリは dist 内 img フォルダ
    - コピー前に 画像の圧縮のプラグインを実行
```
gulp.task('img',function(){
  gulp.src('./src/img/*.jpg')
    .pipe(imageMin())
    .pipe(gulp.dest('./dist/img'));
});　
```











- javascript メソッド/ gulp メソッド？：require　task 何？
require : 呼び出し？
task ：タスクを定義するためのメソッド
pipe ： Node.js のメソッド：ストリームからすべてのデータを引き出し、与えられた行き先に書き込みを行います。



- 「実践で使えるUNIXコマンド」を検索してみる


