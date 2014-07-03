$( document ).ready(function() {

  var cont = $("#content"),
      url  = cont.children("a").attr("href");

  cont.empty();

  var replace = function(){
    $.ajax({url:url}).done(function(html){
      cont.empty().append(html).hide().fadeIn("slow");
    });
  };

  if(url){
    if(cont.hasClass("state")){
      replace()
      setInterval( replace, 1000);
    }

    if(cont.hasClass("io")){
      replace()
    }
  }
});