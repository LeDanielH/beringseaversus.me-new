document.addEventListener('DOMContentLoaded', function(event){
    console.log('page-loaded');
    $('.page .ui.sidebar')
        .sidebar({
            context: $('.page .bottom.segment'),
            scrollLock: true,
            returnScroll: true
        })
        .sidebar('attach events', '.page .menu .item');
});

