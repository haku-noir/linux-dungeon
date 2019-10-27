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
                let top = {
                    score: 1000000000000000000,
                    rank: 1
                };

                for (let i = 0; i < result.length; i++) {
                    if(top.score > result[i].score){
                        top.score = result[i].score;
                        top.rank = i + 1;
                    }
                    value += `
                        <tr>
                            <td>${top.rank}</td>
                            <td>${result[i].user}</td>
                            <td>${result[i].score }</td>
                        </tr>`;
                    $('#modal-content').html(value);
                }
            }
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