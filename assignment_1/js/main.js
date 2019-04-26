function changeTitle (newTitle) {
    document.title = newTitle;
}

function addArticle() {
    column = document.querySelectorAll('div.container > div > div')[0];
    column.innerHTML += '<article></article>';
    article = column.lastChild;
    article.innerHTML += '<h1>This is my second article</h1>';
    article.innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. Nulla facilisi.</p>';
}

function changeLink() {
    linkElement = document.querySelectorAll('footer > div > div > ul > li > a')[2];
    console.log(linkElement);
    linkElement.setAttribute('href', 'https://google.com');
    linkElement.setAttribute('target', '_blank');
}

function changeNavColor() {
    navItems = document.getElementsByClassName('nav-item');
    for (let navItem of navItems) {
        navItem.setAttribute('style', 'background-color:red;');
    }
}

function printPhpObject() {
    var output = document.querySelectorAll('div.container > div > div')[0];
    var phpObject = {
        week1: 'Assignment 1',
        week2: 'No lecture',
        week3: 'Assignment 2',
        week4: '-',
        week5: 'Assignment 3',
        week6: '-',
        week7: 'Guest Lecture'
    };
    output.innerHTML += '<ul>'
    for (let week in phpObject) {
        console.log(week);
        output.innerHTML += '<li>' + week + ' => ' + phpObject[week] + '</li>';
    }
    output.innerHTML += '</ul>'
}

function addSidebar() {
    column = document.querySelectorAll('div.container > div')[0];
    column.setAttribute('class', 'col-md-8');
    container = column.parentNode;
    container.innerHTML += '<div class="col-md-4"></div>';
    container.lastChild.innerHTML += '<h1>Sidebar</h1>';
}

window.addEventListener('load', function () {
    console.log('Document Object Model has been loaded.');
    console.log(location.pathname.split("/").pop());
    switch (location.pathname.split("/").pop()) {
        case 'index.html':
            console.log('case index');
            changeTitle('Webprogramming (LIX019P05) - Index');
            addArticle();
            printPhpObject();
            break;
        case 'second.html':
            console.log('case second');
            changeTitle('Webprogramming (LIX019P05) - Second');
            addSidebar();
            break;
    }
    changeLink();
    changeNavColor();
});