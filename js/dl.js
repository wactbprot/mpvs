

var  replaceHtml = function($elem, cb){
  var url = $elem.attr("data-url");
 console.log(url)
  if(url){
    $.ajax({url:url})
    .done(function(html){

      $elem.replaceWith(html);
    })
    .done(function(){
      if($.isFunction(cb)){
        cb();
      }
    });
  }
};



// synchronisiert
// das html (insbesondere die value Attribute)
var syncInput = function(){
  $("input").on("change", function(e){
    $(this).attr("value", $(this).val());
  });
};

// schickt html unter parent
// zurück an mpvs
var  armButtons= function(){
  $("button").on("click", function(e){
    var parent  = $(this).attr("data-parent"),
        url     = $(this).attr("data-url"),
        html    = $(this).parent(parent).html();
    $.ajax({
      url  : url,
      type : "POST", // the data-method is the method between mpvs and ssmp
      data : html,
      success: function(data, textStatus, jqXHR){
      },
      error: function (jqXHR, textStatus, errorThrown){
        console.log(textStatus);
      }
    });
  });
};

$( document ).ready(function() {
  replaceHtml($("#content").children("a"), function(){
    armButtons();
    syncInput()
  });

  setInterval(function(){
    var $poll = $(".poll")
    $poll.each(function(i){
      replaceHtml($poll.eq(i));
    });
  }, 300);
})
