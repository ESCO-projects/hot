$(function() {
    $('.head__ico-wrap').each(function(i, el) {
        window.setTimeout(function(){
            $(el).addClass('bounceIn');
        }, 200 * i);
    });

    $('.hot__list li').each(function(i, el) {
        window.setTimeout(function(){
            $(el).addClass('active');
        }, 200 * i);
    });

    var intavals = setInterval(function shake() {
        $('.form').toggleClass('shake');
    },3000);
    $('.form').hover(function () {
        clearInterval(intavals);
    });

    $(".js_form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "rest.php",
            data: th.serialize()
        }).done(function() {
            th.trigger("reset");
            window.location.replace("http://hot.maxtv.co.il/thanks.html");
        });
        return false;
    });
    $('.js_tel_mask').mask('000-0000000');
});
