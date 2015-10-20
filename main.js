if ($('form').eq(0).attr('action') === '/cgi-bin/login-wlan-2012.cgi') {
    chrome.storage.sync.get({
        userid: '',
        password: ''
    }, function (items) {
        if (items.userid && items.password) {
            $('input[name=user]').val(items.userid);
            $('input[name=pass]').val(items.password);
            $('form').eq(0).submit();
        } else {
            var div = $('<div>Hint: <a>こちら</a>でIDとパスワードを設定することでログインを自動化出来ます</div>');
            div.css({'background-color': 'white',
                     'border-radius': '20px',
                     'padding': '20px',
                     'box-shadow': '0 0 10px #000',
                     'position': 'absolute',
                     'top': '30px',
                     'right': '30px'});
            div.find('a').attr('href', chrome.extension.getURL('options.html')).attr('target', '_blank');
            div.hide().appendTo($('body')).fadeIn('slow');
        }
    });
} else if ($('h1').eq(0).text() === '無線LAN/携帯端末 ログイン終了') {
    location.href = $('a').eq(0).attr('href');
}
