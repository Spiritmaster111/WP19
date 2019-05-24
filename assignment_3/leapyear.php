<?php
function is_leap_year($year) {
    return ((($year % 4) == 0) && ((($year % 100) != 0) || (($year %400) == 0)));
}

$leapYears = Array();
$currentYear = date('Y');
$nextLeapYear = ceil($currentYear/4)*4;
for ($i = 0; $i < 5; $i++) {
    if (is_leap_year($nextLeapYear)) {
        array_push($leapYears, $nextLeapYear);
    } else {
        $i--;
    }
    $nextLeapYear += 4;
}

/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
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
<script type="application/javascript" src="scripts/leapyear.js"></script>

<div class="pd-40"></div>
<div class="row">
    <div class="col-md-12">
        <?php if (isset($_POST['name']) and isset($_POST['age']) and isset($_POST['mail']) and isset($_POST['residence'])) { ?>
            <h1>Welcome, <?= $_POST['name'] ?></h1>
            <p>The next 5 leap years, this will be your age!</p>
            <?php if (strtolower($_POST['residence']) == 'groningen') { ?>
                <p>Nice, you're living in Groningen!</p>
            <?php } ?>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Age</th>
                </tr>
                </thead>
                <tbody>
                <?php for ($i = 0; $i < 5; $i++) { ?>
                    <tr>
                        <td><?= $leapYears[$i] ?></td>
                        <td><?= $_POST['age'] + $leapYears[$i] - $currentYear?></td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
        <?php } ?>
        <form id="form" action="leapyear.php" method="POST">
            <!-- Name -->
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" class="form-control is-invalid" placeholder="Jan Jansen">
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please fill in your name!
                </div>
            </div>

            <!-- Age -->
            <div class="form-group">
                <label for="age">Age</label>
                <input id="age" name="age" type="number" class="form-control is-invalid" placeholder="42">
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please fill in your age!
                </div>
            </div>

            <!-- Mail Address -->
            <div class="form-group">
                <label for="mail">Mail Address</label>
                <input id="mail" name="mail" type="email" class="form-control is-invalid" placeholder="janjansen@mail.com">
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please fill in your mail address!
                </div>
            </div>

            <!-- Place / Residence -->
            <div class="form-group">
                <label for="residence">Place / Residence</label>
                <input id="residence" name="residence" type="text" class="form-control is-invalid" placeholder="Amsterdam">
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please fill in your residence!
                </div>
            </div>
            <div id="submit" class="btn btn-primary">Show Me!</div>
        </form>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>