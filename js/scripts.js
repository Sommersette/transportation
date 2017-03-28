var types = ["work", "fun"];

var result = function() {
  types.forEach(function(type){
    $(`input:checkbox[name=${type}-transportation]:checked`).each(function(){
      var TransportationMode = $(this).val();
      $(`#${type}-responses ul`).append(`<li>${TransportationMode}</li>`);
    });
  });
};

$(function(){
  $("#work-responses, #fun-responses").hide();
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    result();
    $("#work-responses, #fun-responses").show();
    $("#transportation_survey").hide()
  });
});
