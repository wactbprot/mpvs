$( document ).ready(function() {

  var cont = $("#content"),
      url  = cont.children("a").attr("href");

  cont.empty();

  var replace = function(slow){
    $.ajax({url:url}).done(function(html){
      if(slow){
      cont.empty().append(html).hide().fadeIn("slow");
      }else{
        cont.empty().append(html);
      }
    });
  };

  if(url){
    if(cont.hasClass("state")){
      replace(true)
      setInterval( replace, 1000);
    }

    if(cont.hasClass("io")){
      replace(true)
    }
  }
});