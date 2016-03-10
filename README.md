この拡張を利用したことによるいかなる損害も保証しない
===========================================

セキュリティの神様にごめんなさいを言ってから使いましょう

UT WLAN Auto Login
==================

1. 総合図書館の有線LANに繋ぐと認証を要求されて面倒くさい
2. このChrome拡張を導入する
3. ハッピー

Requirements
------------

OS X 10.10.1 + Google Chrome 49で動作確認を行った．基本的にはOS問わずGoogle Chrome上での利用を想定している．

Install
-------

1. Google ChromeのSettings -> Extensionsを開く (chrome://extensions/)
2. Developer modeにチェックを入れる
3. Load unpacked extension...をクリックし，manifest.jsonのあるディレクトリを指定する
4. Optionsをクリックし，自分の認証情報を設定する

Change Log
----------

- **0.0.2** (Mar 10, 2016): Response to ECCS 2016 updates
- **0.0.1** (Oct 20, 2015): Initial release

License
-------

MIT Licenseに準じる．

なお，このChrome拡張にはjQueryが同梱されている．jQueryはMIT Licenseのもと提供される．
オプション画面は公式サンプル (https://developer.chrome.com/extensions/options : CC-By 3.0 License) を元に一部改変した．
