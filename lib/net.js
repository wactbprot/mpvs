exports.exchange = function(req){
  var id     = req.params.id,
      key    = req.params.key;
  return {
    hostname:  "localhost",
    port:       8001,
    path:       "/" + id + "/exchange/" + key,
    method:    'GET',
    headers: { 'Content-Type': 'application/json' }
  };
}
