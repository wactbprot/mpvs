```
                                                    
   _/_/_/  _/_/    _/_/_/    _/      _/    _/_/_/   
  _/    _/    _/  _/    _/  _/      _/  _/_/        
 _/    _/    _/  _/    _/    _/  _/        _/_/     
_/    _/    _/  _/_/_/        _/      _/_/_/        
               _/                                   
              _/                                    
```

It's all about semantics (and state transfer representation).
----------

## Request mp:

http://server:port/mp

response:

```
<struct>
<link href= http://server:port/mp/struct/level1 ></link>
</struct>
```

## Request mp/struct:

http://server:port/mp/struct

response:

```
<level1>
<link href= http://server:port/mp/struct/level1/level2 ></link>
</level1>
```

## Request mp/struct/level1:

http://server:port/mp/struct/level1

response:

```
<level2>
<link href= http://server:port/mp/struct/level1/level2/level3 ></link>
</level2>
```

## Request mp/struct/level1/level2:

http://server:port/mp/struct/level1/level2

response:

```
<level3>
<content/>
</level3>
```
