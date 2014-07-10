```
                                                    
   _/_/_/  _/_/    _/_/_/    _/      _/    _/_/_/   
  _/    _/    _/  _/    _/  _/      _/  _/_/        
 _/    _/    _/  _/    _/    _/  _/        _/_/     
_/    _/    _/  _/_/_/        _/      _/_/_/        
               _/                                   
              _/                                    


                           +---------------+
                           |   node-relay  |
                           |---------------|             +--------------+
                           |               |     TCP     |              |
                           |               +-----VXI-----+   Devices    |
                           |               |     UDP     |              |
                           +--------+------+             +--------------+
                                    |
                                    |
                                http/json
                                    |
   +-------------+           +------+-----+
   |  CouchDB    |           |  ssmp      |
   |-------------|           |------------|              +--------------+
   |             +-http/json-|            |              |              |
   |             |           |            +--http/json---+   csmp       |
   |             |           |            |              |              |
   +-------------+           +----+-- ----+              +--------------+
                                  |
                                  |
                              http/json
                                  |
                            +-----+-------+
                            |  mpvs       |
                            |-------------|              +--------------+
                            |             |              |              |
                            |             +--http/html5--+   Browser    |
                            |             |              |              |
                            +-------------+              +--------------+

```
# on how it works:
## output
Generates html from ssmp json api:
1st calls ```ssmp/mp-id/frame/no``` inserts a
link to content. This content link is replaced
with the content by the client (```js/dl.js```)

## input
Takes html from the client (```js/dl.js```)
generates json out of it and sends it back to ssmp.
