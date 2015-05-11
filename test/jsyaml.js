var expect    = require("chai").expect;
var yaml = require('js-yaml');
var fs = require('fs');


describe('js-yaml', function(){
  it('should parses string as single YAML document.(if not in YAML block, it will not be parsed)', function(){
    fs.readFile('./sample.yml', 'utf8', function(err, result){
      var doc = yaml.safeLoad(result);
      expect(doc).to.equal('title: About David Tucker\nsubtitle: Software developer');
      expect(doc.title).to.equal('About David Tucker');
      expect(doc.subtitle).to.equal('Software developer');
    });
  });
});
