$(document).ready(function() {
    $(".fancybox").fancybox();
    /* imported js from nav bar lesson */
    $("nav").onePageNav();

    //when i click the menu icon
    //toggle the nav ul

    $(".menu-icon").click(function() {
        $("nav ul").slideToggle();
    });

    //fixed the bug

    var menu = $('nav ul');

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 768 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

//makes fade in text on home section
$(document).ready(function() {
    $(".home").hide(0).delay(450).fadeIn(3000)
});

///////////////////////////////////////////////////////////////////////////////

//countdown clock

var end = new Date('02/14/2017 10:1 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + 'days ';
        document.getElementById('countdown').innerHTML += hours + 'hrs ';
        document.getElementById('countdown').innerHTML += minutes + 'mins ';
        document.getElementById('countdown').innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);