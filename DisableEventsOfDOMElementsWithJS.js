//source: https://stackoverflow.com/questions/8249641/enable-disable-events-of-dom-elements-with-js-jquery
//demo: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_click
 $("#link2").click(function() {
      $("#link1").toggleAttribute("disabled");
 });
