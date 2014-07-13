$( document ).ready(function() {

  var cont = $("#content"),
      url  = cont.children("a").attr("href");
  cont.empty();

  var addCe = function(){
    // .on('change') synchronisiert
    // das html (insbesondere die value Attribute)
    $("input").on("change", function(e){
      $(this).attr("value", $(this).val());
    });

    $("button").on("click", function(e){
      var parent  = $(this).attr("data-parent"),
          url     = $(this).attr("data-url"),
          html    = $(this).parent(parent).html();

      $.ajax({
        url  : url,
        type : "POST", // the data-method is the method between mpvs and ssmp
        data : html,
        success: function(data, textStatus, jqXHR){
          replace(true);
        },
        error: function (jqXHR, textStatus, errorThrown){
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        }
      });
    })
  };

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