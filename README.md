# Hashapass Core
A port of the password generation algorithm used by hashapass.com

> **Note:** This tool is not affiliated with [hashapass.com](http://hashapass.com/). I have created it as a tool for generating compatible passwords.

## Getting Started
Install ```hashapass-core``` with [npm](https://npmjs.org/).

```
npm install hashapass-core
```

### Usage
By default ```hashapass-core``` will return an **8** character substring of the password:
```
#!javascript
var hashapass = require('hashapass-core');
hashapass.generate('parameter', 'master_pass'); // o3NEqcO8 
```
If you want a longer, or indeed shorter, password:
```
#!javascript
var hashapass = require('hashapass-core');
hashapass.generate('parameter', 'master_pass', {
  len: 14
}); // o3NEqcO8ndcotT 
```
> **Note:** By default the length is 8 characters. By changing this, the password will no longer be compatible with [hashapass.com](http://hashapass.com/).

## License
Copyright (c) 2015 Liam Moat

Released under [the MIT license](https://bitbucket.org/liammoat/hashapass-core/raw/master/LICENCE).
