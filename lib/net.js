exports.get = function(reqobj){
  var id     = reqobj.id,
      key    = reqobj.key || "",
      struct = reqobj.struct;

  return {
    hostname:  "localhost",
    port:       8001,
    path:       "/" + id + "/" + struct + "/" + key,
    method:    "GET",
    headers: { 'Content-Type': 'application/json' }
  };
}
