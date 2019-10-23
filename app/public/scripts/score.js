$(function() {
    $("#modal-open").click(function() {

        $(this).blur();
        if ($("#modal-overlay")[0]) returnfalse;
        $("body").append('<div id="modal-overlay"></div>');
        $("#modal-overlay").fadeIn("slow");


        centeringModalSyncer();


        $.ajax({
            url: "http://localhost/api/score",
            type: "GET",
            dataType: "json",
            data: { name: 'user' },
            success: function() {
                let dataArray = data.any;

                $.each(dataArray, function(i) {
                    $("#mondal-content").append("<p>uid: " + dataArray[i].uid + "　user: " + dataArray[i].user + "　　score " + dataArray[i].score + ")</p>");
                });
            }
        });
    });

    $("#modal-content").fadeIn("slow");

    $("#modal-overlay,#modal-close").unbind().click(function() {
        $("#modal-content,#modal-overlay").fadeOut("slow", function() {
            $('#modal-overlay').remove();
        });
    });
});

$(window).resize(centeringModalSyncer);

function centeringModalSyncer() {
    var w = $(window).width();
    var h = $(window).height();
    var cw = $("#modal-content").outerWidth();
    var ch = $("#modal-content").outerHeight();
    $("#modal-content").css({ "left": ((w - cw) / 2) + "px", "top": ((h - ch) / 2) + "px" });
}
});