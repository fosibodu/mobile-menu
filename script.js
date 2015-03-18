function menu() {

    $('.navbar').addClass('responsive-menu');
    $('.menu').click(function () {

        $('.responsive-menu').toggleClass('expand');
    });
}

$(window).load(menu);
