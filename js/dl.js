


// synchronisiert
// das html (insbesondere die value Attribute)
var syncInput = function(){
  $("input").on("change", function(e){
    $(this).attr("value", $(this).val());
  });
};

// schickt html unter parent
// zurück an mpvs
var  exchangeButton= function($this){
  $this.on("click",  function(){

    var parent  = $(this).attr("data-parent"),
        url     = $(this).attr("data-url"),
        html    = $(this).parent(parent).html();

    $.ajax({
      url  : url,
      type : "POST", // the data-method is the method between mpvs and ssmp
      data : html,
      success: function(data, textStatus, jqXHR){
        console.log("success: " + textStatus);
      },
      error: function (jqXHR, textStatus, errorThrown){
        console.log("error: " + textStatus);
      },
      complete: function (jqXHR, textStatus){
        console.log("complete: " + textStatus);
      }
    });
  });
};

var  toggleButton= function($this){
  $this.on("click",function() {
    var $parent = $(this).parent(".poll");
    if($parent.hasClass("poll")){
      $parent.removeClass("poll").addClass("nopoll");
      return;
    }
    if($parent.hasClass("nopoll")){
      $parent.removeClass("nopoll").addClass("poll");
      return;
    }
  })
}
var  replaceHtml = function($elem, cb){
  var url = $elem.attr("data-url");
  $elem.children("button").off("click");
  if(url){
    $.ajax({url:url})
    .done(function(html){
      var $html =$(html);
      $elem.replaceWith($html);

      exchangeButton($html.children("button.exchange"));
      toggleButton($html.children("button.toggle"));
      if($.isFunction(cb)){
        cb();
      }
    })
  }
};

$( document ).ready(function() {

  replaceHtml($("#content").children("a"), function(){
    exchangeButton($("button.exchange"));
    syncInput();
  });

  setInterval(function(){
    var $poll = $(".poll")
    $poll.each(function(i){
      replaceHtml($poll.eq(i));
    });
  }, 500);
})
