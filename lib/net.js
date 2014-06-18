exports.subcon = function(req){
  var id     = req.params.id,
      cont   = req.params.cont || "";
  return {
    hostname:  "localhost",
    port:       8001,
    path:       "/" + id + "/element/" + cont,
    method:    'GET',
    headers: { 'Content-Type': 'application/json' }
  };
}


exports.excon = function(req){
  return {
    hostname:  "localhost",
    port:       8001,
    path:        "/" +req.params.id + "/exchange",
    method:    'GET',
    headers: { 'Content-Type': 'application/json' }
  };
}
