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
                let value = "<h1>スコア</h1><table><th>順位</th> <th> user </th> <th> score </th>";
                for (let i = 0; i < 11; i++) {
                    value += `                    
                    <tr>
                        <td>${i + 1} </td>
                        <td>${result[i].user}</td>
                        <td> ${result[i].score }</td>
                    </tr>`;
                    $('#modal-content').html(value);
                }
            },
            error: function() { console.log('Miss..'); }
        });

        $('#modal-content').fadeIn('slow');

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
});