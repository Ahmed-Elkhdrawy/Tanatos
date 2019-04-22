/*global $, window*/

$(function () {
    'use strict';

    //header height
    $('.slider').height($(window).height());
    $('.slider .navbar').height($('.slider').height());
    $(window).resize(function () {
        $('.slider').height($(window).height());
        $('.slider .navbar').height($('.slider').height());
    });

    //drop menu
    $(".navbar").hide();
    $(".links").on('click', function () {
        $(".navbar").fadeToggle(1000);
    });

    //menu active
    $(".navbar .menu li a").on("click", function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $(".navbar").fadeOut(1000);
    });
    $(".navbar .menu li a, .intro button").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: ($("#" + $(this).data("scroll")).offset().top - $(".our-logo").height() + 1)
        }, 1000);
    });
    //scroll to features
    $('.chevicon').on("click", function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });

    //nav bg
    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#services").offset().top - 50) {
            $(".our-logo").css({
                backgroundColor: "rgba(45, 60, 75, 1"
            }, 700);
        } else if ($(window).scrollTop() < $("#services").offset().top) {
            $(".our-logo").css({
                backgroundColor: "#00000000"
            }, 700);
        }
    });

    // trigger nice scroll
    $("html").niceScroll({
        cursorcolor: "rgba(244,36,72,1)",
        cursorwidth: "10px",
        background: "rgba(20,20,20,0.1)",
        cursorborder: "none",
        cursorborderradius: 10
    });

    //features add class
    $('.features .container>div, .features .icon').addClass(' d-flex  d-flex-center');

    //show more
    $('.our-work .show-more .butn').on('click', function () {
        $('.items-box .d-none').fadeToggle(1000).end();
    });

    //testimonials
    var leftArrow = $(".testim .fa-chevron-left"),
        rightArrow = $(".testim .fa-chevron-right");

    function checkClients() {
        if ($(".testim .client:first").hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        if ($(".testim .client:last").hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
        //كود مختصر
        /*
            $(".testim .client:first").hasClass('active') ?  leftArrow.fadeOut() : leftArrow.fadeIn();

            $(".testim .client:last").hasClass('active') ?  rightArrow.fadeOut() : rightArrow.fadeIn();
        */
    }
    checkClients();

    $(".testim i").on('click', function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testim .active').fadeOut(200, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(200);
                checkClients();
            });
        } else {
            $('.testim .active').fadeOut(200, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(200);
                checkClients();
            });
        }
    });
});