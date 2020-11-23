'use strict';

const first_word = require('../first-word');


describe('Testing first word', () => {

    it( 'it should find a repeated string;',() => {

    let s = "Once upon a time, there was a brave princess who...";

    expect(first_word(s)).toEqual("a");
  });

  it( 'it should find a repeated string even w a comma;',() => {

    let s2 = "Mary had a little lamb, little";

    expect(first_word(s2)).toEqual("little");
  });

  it( 'it should not find a match and let you know',() => {

    let s3 = "Mary had a donkeybird...";

    expect(first_word(s3)).toEqual("no match");
  });

});
