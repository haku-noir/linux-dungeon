$(function(){
  $.ajax({
    url:'/api/question',
    type:'GET',
    data:{
      'did':$('#did').val()
    }
  })
  .done((question) => {
    var value = "";
    value += `<h1 class="text" align="center">${question.stage}</h1>`;
    value += `<p class="text" align="center">${question.que}</p>`
    $('#question').html(value);
  });
});
