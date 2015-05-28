var hashapass = require('../src/hashapass');

var PARAMETER = 'google';
var MASTER = '4_Very_STR0NG_P455W0RD';

describe('hashapass', function () {
  it('uses defaults length of eight characters', function () {
    var result = hashapass.generate(PARAMETER, MASTER);
    expect(result.length).toBe(8);
  });
  
  it('uses given length of 14 characters', function () {
    var result = hashapass.generate(PARAMETER, MASTER, { len: 14 });
    expect(result.length).toBe(14);
  });
  
  describe('comparison', function () {
    var benchmarks = [
      { parameter: 'hello', master: 'world', expected: 'Wgxn2SLe' },
      { parameter: 'I_4m_a_TEST', master: 'testTEST123', expected: '7zDZsNAN' },
      { parameter: 'パスワード', master: 'パスワード', expected: 'XNtJXy/w' }
    ];
    
    benchmarks.forEach(function (bm) {
      it('returns "' + bm.expected + '" when given "' + bm.parameter + '" and "' + bm.master + '"', function () {
        var result = hashapass.generate(bm.parameter, bm.master);
        expect(result).toBe(bm.expected);
      });
    });
  });
});