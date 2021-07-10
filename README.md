# window.open で別windowで開いた上で, jsをinjectionしてID/PWできないかの検証

https://arstechnica.com/gadgets/2021/07/google-boots-google-play-apps-for-stealing-users-facebook-passwords/
これをみて, webviewでできるなら window.open でもできるのではと思った.

## 準備
1. `yarn install`する,
2. `yarn dev:index --https`を実行,
3. `yarn dev:login --https`を実行,
4. `src/DummyLogin.jsx`内の`LOGIN_HTML`変数のlocalhostのポート番号を今使っているものに変更

## 結果
大丈夫そう. iframeと同様に, window.open で開かれるwindowのDOMはcross-originの場合は保護されていそう(read も writeもできない). これはwindow.openで呼び出す親側からは改竄できない聖域っぽいので, window.document.body.appendChild で `<script />` を injection したり, あるいは `呼び出しもと window` から `呼び出し先window` のDOMにイベントリスナーをはやして...みたいなのはできなさそう.

やるとしたら, same originからdummy 用のログインhtmlを配信するとかになりそう, その際の挙動はFBのCORPで実際にログインとかは無理そうなので, 自分でいい感じにそれっぽいものを拵える必要がありそう
