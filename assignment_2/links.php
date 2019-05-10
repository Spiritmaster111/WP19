<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Links',
    'items' => Array(
        'Home' => '/~s3133125/WP19/assignment_2/index.php',
        'Links' => '/~s3133125/WP19/assignment_2/links.php',
        'News' => '/~s3133125/WP19/assignment_2/news.php',
        'Future' => '/~s3133125/WP19/assignment_2/future.php'
    )
);
include __DIR__ . '/tpl/head.php';
/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
    <div class="col-md-12">
        <h1>Imagine there being links here!</h1>
        <ul id="linkList">

        </ul>

        <form>
            <div class="btn btn-primary" id="toggleLinks">Toggle</div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <input class="form-control" type="text" id="addLinkName" placeholder="Link Name">
                </div>
                <div class="form-group col-md-6">
                    <input class="form-control" type="text" id="addLinkURL" placeholder="URL">
                </div>
            </div>
            <div class="btn btn-primary" id="addLinkBtn">Add Link</div>
            <div class="btn btn-secondary" id="deleteMode">Delete Mode</div>
        </form>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';
?>