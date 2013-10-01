
describe('within', function(){

  var within = require('within')
    , assert = require('assert');

  describe('past', function(){
    it('should return empty string', function(){
      assert('' == within(new Date - 1e3));
    })
  })

  describe('new Date', function(){
    it('should return "just now"', function(){
      assert('just now' == within(new Date));
    })
  })

  describe('new Date + 1e3', function(){
    it('should return "in a second"', function(){
      assert('in a second', within(new Date(new Date().getTime() + 1e3 + 20)));
    })
  })
})
