function removeArticle(rm_btn) {
    let article_id = $(rm_btn).attr('article-id');
    let rm_article = $.post("scripts/news_remove.php", {article_id: article_id});
    rm_article.done(function (data) {
        printLatestNews();
    });
}

function printLatestNews() {
    let articles_html = $.post("scripts/read_latest_news.php", {call_now: "True"});
    let news_container = $('#news_container');
    articles_html.done(function (data) {
        news_container.empty();
        news_container.append(data.html);
        $('.article_remove').click(function () {
            removeArticle(this);
        });
    });
}

$(function() {
    printLatestNews();
    window.setInterval(function () {
        printLatestNews();
    }, 5000);
});