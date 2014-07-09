exports.get = function(reqobj){
  var id     = reqobj.id,
      key    = reqobj.key || "",
      struct = reqobj.struct;

  return {
    hostname:  "localhost",
    port:       8001,
    path:       "/" + id + "/" + struct + "/" + key,
    method:    "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  };
}

exports.put = function(reqobj){
  var id     = reqobj.id,
      key    = reqobj.key    || "",
      subkey = reqobj.subkey || "",
      struct = reqobj.struct;
  return {
    hostname:  "localhost",
    port:       8001,
    path:       "/" + id + "/" + struct + "/" + key + "/" + subkey,
    method:    "PUT",
    headers: {
        'Content-Type': 'text/data'
      }

  };
}
