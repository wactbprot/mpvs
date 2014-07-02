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

exports.frame = function(req){
  var id     = req.params.id;
  return {
    hostname:  "localhost",
    port:       8001,
    path:       "/" + id + "/frame",
    method:    'GET',
    headers: { 'Content-Type': 'application/json' }
  };
}

exports.page = function(req){
  var no   = req.params.no,
      id   = req.params.id,
      page = req.params.page;
  return {
    hostname:  "localhost",
    port:       8001,
    path:       "/" + id + "/" + page + "/" + no,
    method:    'GET',
    headers: { 'Content-Type': 'application/json' }
  };
}
