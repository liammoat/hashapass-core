# Hashapass
A port of the password generation algorithm used by hashapass.com

> **Note:** This tool is not affilated with [hashapass.com](http://hashapass.com/). I have created it as a tool for generating compatible passwords.

## Getting Started
Install ```hashapass``` with [npm](https://npmjs.org/).

```
npm install hashapass
```

### Usage
By default ```hashapass``` will return a **8** character substring of the password:
```
#!javascript
var hashapass = require('hashapass');
hashapass.generate('parameter', 'master_pass'); // o3NEqcO8 
```
If you want a longer, or indeed shorter, password:
```
#!javascript
var hashapass = require('hashapass');
hashapass.generate('parameter', 'master_pass', {
  len: 14
}); // o3NEqcO8ndcotT 
```

## License
Copyright (c) 2015 Liam Moat

Released under [the MIT license](https://bitbucket.org/liammoat/hashapass/raw/master/LICENCE).
