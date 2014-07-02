$( document ).ready(function() {

  var stateCont = $(".contentstate"),
      stateUrl  = stateCont
                  .children("a")
                  .attr("href");
  stateCont.empty();

  var refreshState = function(){
    $.ajax({url:stateUrl}).done(function(html){
      stateCont.empty().append(html);
    });
  };
  if(stateUrl){
    refreshState()
    setInterval( refreshState, 1000);
  }


});