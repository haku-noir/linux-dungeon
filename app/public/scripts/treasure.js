$(function(){
  var treasurelist;
  $.ajax({
    url:'/api/treasurelist',
    type:'GET',
    data:{
      'user':$('#user').val()
    }
  })
  .done((treasures) => {
    treasurelist = treasures;
    $.each(treasurelist, function(index, treasure) {
      value = "";
      $.each(treasures, function(index, treasure) {
          value += `<button id="modal-open-treasure" class="button" value="${index}">${treasure.name}</button>`
      });
      $('#treasure-box').html(value);
    });
  });

  $(document).on("click", "#modal-open-treasure", function(){
    console.log($(this).val());
    $(this).blur();
    $("body").append('<div id="modal-overlay-treasure"></div>');
    $("#modal-overlay-treasure").fadeIn("slow");

    centeringModalSyncerTreasure();

    $("#modal-content-treasure").html(`
      <p>${treasurelist[parseInt($(this).val())].val}<p>
  `);
    $("#modal-content-treasure").fadeIn("slow");

    $("#modal-overlay-treasure,#modal-close-treasure").unbind().click(function(){
      $("#modal-content-treasure,#modal-overlay-treasure").fadeOut("slow", function(){
        $('#modal-overlay-treasure').remove();
      });
    });
  });

  $(window).resize(centeringModalSyncerTreasure);
  function centeringModalSyncerTreasure(){
    var w = $(window).width();
    var h = $(window).height();
    var cw = $("#modal-content-treasure").outerWidth();
    var ch = $("#modal-content-treasure").outerHeight();
    $("#modal-content-treasure").css({"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"});
  }
});
