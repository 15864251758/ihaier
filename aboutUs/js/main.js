function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
        marginTop: "-35px"
    }, 500, function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
    });
}
$(document).ready(function() {
    setInterval('AutoScroll("#message-01")', 4000);
    setInterval('AutoScroll("#message-02")', 5000);
    $('.card-show').click(function() {
        var $cardToggle = $(this).parent().find('.card-detail');
        if ($cardToggle.hasClass('show')) {
            $(this).parent().find('.card-tip').removeClass('on');
            $cardToggle.removeClass('show');
            $(this).parent('.card-item').removeClass('active');
        } else {
            $(this).parent().find('.card-tip').addClass('on');
            $cardToggle.addClass('show');
            $(this).parent('.card-item').addClass('active');
        }; 
    });
    $('.card-item').click(function() {
        var $P=$(this).find('.card-intro').find('p');
        if ($P.hasClass('active')) {
            $P.removeClass('active')
        } else{
            $P.addClass('active')
        };
    });
        $(window).scroll(function() {
        if ($(window).scrollTop() > 90) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    $('.carousel').carousel({
        interval: 5000
    });
});
