$(function(){
    $("#modal-open").click( function(){
        stop = true;
        $(this).blur();
        if($("#modal-overlay")[0])returnfalse;
        $("body").append('<div id="modal-overlay"></div>');
        $("#modal-overlay").fadeIn("slow");

        $.ajax({
            url: 'http://localhost/api/score',
            type: 'GET',
            dataType: 'json',
            success: function(result) {
                let value = "<h1>スコア</h1><table><th>順位</th> <th> USER </th> <th> SCORE </th>";
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

        $('#modal-overlay').unbind().click(function() {
            $('#modal-content,#modal-overlay').fadeOut('slow', function() {
                $('#modal-overlay').remove();
                stop = false;
            });
        });

        $(document).on("keydown", "", function(){
            $("#modal-overlay").trigger("click");
        });
    });
});
