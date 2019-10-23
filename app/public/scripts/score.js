$(function() {
    $('#modal-open').click(function() {
        console.log('aaa');

        $(this).blur();
        if ($('#modal-overlay')[0]) returnfalse;
        $('body').append('<div id="modal-overlay"></div>');
        $('#modal-overlay').fadeIn('slow');


        centeringModalSyncer();


        $.ajax({
            url: 'http://localhost/api/score',
            type: 'GET',
            dataType: 'json',
            success: function(result) {
                for (var i = 0; i < 11; i++) {
                    $('#modal-content').append('<p> uid: ' + result[i].uid + '　user: ' + result[i].user + ' score: ' + result[i].score + '</p>');
                }
            },
            error: function() { console.log('Miss..'); }
        });

        $('#modal-content').fadeIn('slow');


    });


    $('#modal-overlay,#modal-close').unbind().click(function() {
        $('#modal-content,#modal-overlay').fadeOut('slow', function() {
            $('#modal-overlay').remove();
        });
    });

    $(window).resize(centeringModalSyncer);

    function centeringModalSyncer() {
        var w = $(window).width();
        var h = $(window).height();
        var cw = $('#modal-content').outerWidth();
        var ch = $('#modal-content').outerHeight();
        $('#modal-content').css({ 'left': ((w - cw) / 2) + 'px', 'top': ((h - ch) / 2) + 'px' });
    }
});