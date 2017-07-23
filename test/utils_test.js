import { backgroundCSSGenerator } from '../src/utils';

describe('backgroundCSSGenerator(string)', () => {
  it('it correctly wraps hexcode strings', () =>
    expect(backgroundCSSGenerator('#FAFAFA')).to.eql(
      'background-color: #fafafa'
    ));

  it('even minimal ones, with no hashes', () =>
    expect(backgroundCSSGenerator('faf')).to.eql('background-color: #ffaaff'));

  it('wraps rgb colors', () =>
    expect(backgroundCSSGenerator('rgb(0, 0, 0)')).to.eql(
      'background-color: rgb(0, 0, 0)'
    ));

  it('and rgba colors', () =>
    expect(backgroundCSSGenerator('rgba(119, 119, 225, 0.25)')).to.eql(
      'background-color: rgba(119, 119, 225, 0.25)'
    ));

  it('trusts inputted urls to be background images', () =>
    expect(backgroundCSSGenerator('https://i.imgur.com/HlmWDMU.jpg')).to.eql(
      'background-image: url("https://i.imgur.com/HlmWDMU.jpg")'
    ));

  it('returns a random pretty  color if the user-input string still doesn\t fit', () => {
    const terribleArg = 'lk2j3l2kjdfs32d';
    expect(backgroundCSSGenerator(terribleArg)).to.be.a('string');
    expect(backgroundCSSGenerator(terribleArg)).to.include('background-color:');
  });
});
