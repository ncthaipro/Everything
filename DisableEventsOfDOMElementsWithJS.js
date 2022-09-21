//source: https://stackoverflow.com/questions/8249641/enable-disable-events-of-dom-elements-with-js-jquery
//demo: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_click
//w1:
$("#link2").click(function() {
      $("#link1").toggleAttribute("disabled");
 });
//w2:
$("div").click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
});
//w3:
$("div").prop('onclick', null).off('click');
//w4:
$('div').prop("disabled", true) 
//w5:
 $('div').parent().remove()
