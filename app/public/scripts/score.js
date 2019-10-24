$(function(){
    $("#modal-open").click( function(){
        stop = true;
        $(this).blur();
        if($("#modal-overlay")[0])returnfalse;
        $("body").append('<div id="modal-overlay"></div>');
        $("#modal-overlay").fadeIn("slow");

        centeringModalSyncer();


        $.ajax({
            url: 'http://localhost/api/score',
            type: 'GET',
            dataType: 'json',
            success: function(result) {
                let value = " <h1>スコア</h1>";
                for (let i = 0; i < 11; i++) {
                    value += `<p>${(i + 1)} 位 user: ${result[i].user} score: ${result[i].score }</p>`;
                    $('#modal-content').html(value);
                }

            },
            error: function() { console.log('Miss..'); }
        });

        $('#modal-content').fadeIn('slow');

        $('#modal-overlay,#modal-close').unbind().click(function() {
            $('#modal-content,#modal-overlay').fadeOut('slow', function() {
                $('#modal-overlay').remove();
                stop = false;
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
});