$( document ).ready(function() {

  var cont = $("#content"),
      url  = cont.children("a").attr("href");
  cont.empty();

  var addCe = function(){
    $("button").on("click",".", function(e){

      var url    = $(this).attr("data-url"),
          parent = $(this).attr("data-parent"),
          method = $(this).attr("data-method"); 

    });
  }

  var replace = function(slow){
    $.ajax({url:url}).done(function(html){
      if(slow){
        cont.empty().append(html).hide().fadeIn("slow", addCe);
      }else{
        cont.empty().append(html);
      }
    });
  };

  if(url){
    if(cont.hasClass("state")){
      replace(true);
      setInterval( replace, 1000);
    }

    if(cont.hasClass("io")){
      replace(true);
      addCe();
    }
  }


});