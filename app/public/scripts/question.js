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
    value += `<font id="question-statement" class="text">${question.que}</font>`
    $('#question').html(value);
  });
});
