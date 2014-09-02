exports.get = function(reqobj){
  var id     = reqobj.id,
      struct = reqobj.struct,
      key    = reqobj.key || "",
      subkey = reqobj.subkey,
      path;
  if(subkey){
     path   = "/" + [id, struct, key, subkey].join("/");
  }else{
    path   = "/" + [id, struct, key].join("/");
  }
  return {
    hostname:  "localhost",
    port:       8001,
    path:       path,
    method:    "GET",
    headers: {'Content-Type': 'application/json'}
  };
}

exports.set = function(reqobj){
  var id     = reqobj.id,
      struct = reqobj.struct,
      key    = reqobj.key    || "",
      subkey = reqobj.subkey || "",
      method = reqobj.method || "PUT",
      path   = reqobj.path   ||  "/" + [id, struct, key, subkey].join("/");
  return {
    hostname: "localhost",
    port:      8001,
    path:      path,
    method:    method,
    headers: {'Content-Type': 'text/data'}

  };
}
