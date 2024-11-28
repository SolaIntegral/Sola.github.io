
$(document).ready(function () {
    // ナビゲーションの動的読み込み
    $('body').prepend('<div id="nav"></div>');
    $('#nav').load('nav.html');

    // ページ遷移を制御
    $('nav').on('click', 'a', function (e) {
        e.preventDefault(); // デフォルトのリンク動作をキャンセル
        const target = $(this).attr('href'); // 遷移先のパスを取得

        // コンテンツエリアを動的に更新
        $('#content').fadeOut(300, function () {
            $('#content').load(target + ' #content', function () {
                $('#content').fadeIn(300); // フェードイン
            });
        });
    });
});


