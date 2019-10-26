var treasurelist;

$(function(){
  $.ajax({
    url:'/api/treasurelist',
    type:'GET',
    data:{
      'user':$('#user').val()
    }
  })
  .done((treasures) => {
    console.log("treasures");
    console.log(treasures);
    treasurelist = treasures;
    $.each(treasurelist, function(index, treasure) {
      value = "";
      $.each(treasures, function(index, treasure) {
        value += `<button id="modal-open-treasure" class="treasure" value="${index}">${treasure.name}</button>`
      });
      $('#treasure-box').html(value);
    });
  });
  console.log("treasures");

  $(document).on("click", "#modal-open-treasure", function(){
    stop = true;
    $(this).blur();
    $("body").append('<div id="modal-overlay-treasure"></div>');
    $("#modal-overlay-treasure").fadeIn("slow");

    $("#modal-content-treasure").html(`
      <h2>${treasurelist[parseInt($(this).val())].title}</h2>
      ${treasurelist[parseInt($(this).val())].val}
    `);
    $("#modal-content-treasure").fadeIn("slow");

    $("#modal-overlay-treasure,#modal-close-treasure").unbind().click(function(){
      $("#modal-content-treasure,#modal-overlay-treasure").fadeOut("slow", function(){
        $('#modal-overlay-treasure').remove();
        stop = false;
      });
    });
  });
});
