const chai = require('chai');
const { JSDOM } = require('jsdom');

global.expect = chai.expect;

const { window } = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost'
});
global.window = window;
global.document = window.document;
