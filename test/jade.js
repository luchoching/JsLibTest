var expect    = require("chai").expect;
var jade = require('jade');

describe('jade', function(){
  describe('compile:  Compile some jade source to a function which can be rendered multiple times with different locals.', function(){
    it('sould return a html string', function(){
      var fn = jade.compile('string of jade', {pretty:false, debug:true});
      var html = fn();
      expect(html).to.equal('<string>of jade</string>');
    });
    it('--> sould return a html string  with local include', function(){
      var fn = jade.compile('h1= name', {pretty:false, debug:true});
      var html = fn({name: 'parks'});
      expect(html).to.equal('<h1>parks</h1>');
    });
    it('--> sould return a html string(use !=)  with local(html tag) include', function(){
      var fn = jade.compile('h1!= name', {pretty:false, debug:true});
      var html = fn({name: '<b>parks</b>'});
      expect(html).to.equal('<h1><b>parks</b></h1>');
    });
  });
  describe('render', function(){
    it('--> should return a html string without locals', function(){
      var html = jade.render('string of jade', {pretty: false, debug:true});
      expect(html).to.equal('<string>of jade</string>');
    });
  });
  describe('compileFile: Compile some jade source from a file to a function which can be rendered multiple times with different locals.', function(){
    it('--> should return a html string from jade file with some locals', function(){
      var fn = jade.compileFile('./test/templates/Hello.jade', {pretty: false, debug:true});
      var html = fn({name: 'parks呂'});
      expect(html).to.equal('<h1>Hello parks呂</h1>');
    });

    it('--> should enable jade file inhertenced from other jade file', function(){
      var fn = jade.compileFile('./test/templates/page.jade', {pretty: false, debug:true});
      var html = fn();
      expect(html).to.equal('<section><h1>Hello</h1></section>');
    });
  });
});
