window.addEvent('domready', function() {
    document.id('red').addEvent('click', function() {
        $$('body').addClass('red');
    });
});
