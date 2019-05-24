<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/~s3133125/WP19/assignment_3/index.php',
        'Add news item' => '/~s3133125/WP19/assignment_3/news_add.php',
        'Leap Year' => '/~s3133125/WP19/assignment_3/leapyear.php',
        'Simple Form' => '/~s3133125/WP19/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>

<div class="pd-40"></div>
<div class="row">
    <div class="col-md-12">
        <?php if (isset($_GET['submit'])) { ?>
            <h1>Welcome <?= $_GET['name'] ?>!</h1>
            <?php if (strtolower($_GET['residence']) == 'amsterdam') { ?>
                <p>You're from the capital of the Netherlands!</p>
            <?php } else { ?>
                <p>You're from <?= $_GET['residence'] ?>!</p>
            <?php }
        }?>
        <form method="GET">
            <!-- Name -->
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" class="form-control" placeholder="Jan Jansen">
            </div>

            <!-- Residence -->
            <div class="form-group">
                <label for="residence">Place / Residence</label>
                <input id="residence" name="residence" type="text" class="form-control" placeholder="Amsterdam">
            </div>

            <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>