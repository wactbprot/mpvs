$( document ).ready(function() {

  var cont  = $("#content"),
      url   = cont.children("a").attr("href"),
      addCe = function(){
        // input.on('change')
        //
        // synchronisiert
        // das html (insbesondere die value Attribute)
        $("input").on("change", function(e){
          $(this).attr("value", $(this).val());
        });
        // button.on('click')
        //
        // schickt html unter parent
        // zurück an mpvs
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
        });
      },
              replace = function(slow){
                $.ajax({url:url}).done(function(html){
                  if(slow){
                    cont.empty()
                    .append(html)
                    .hide()
                    .fadeIn("fast", addCe);
                  }else{
                    cont.empty().append(html);
                  }
                });
              };
  //
  cont.empty();

  if(url){
    if(cont.hasClass("state")){
      replace(true);
      setInterval( replace, 800);
    }

    if(cont.hasClass("io")){
      replace(true);
      addCe();
    }
  }
});
