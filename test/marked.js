var expect    = require("chai").expect;
var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

describe('marked', function(){
  it('should covert markdwon to html string(include line break)', function(){
    var html = marked('I am using __markdown__.');
    expect(html).to.equal('<p>I am using <strong>markdown</strong>.</p>\n');
  });
});
