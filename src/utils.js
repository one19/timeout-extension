/* @flow */
const tc = require('tinycolor2');
const validUrl = require('valid-url');

module.exports.backgroundCSSGenerator = (background: string): string => {
  if (tc(background).isValid()) {
    return `background-color: ${tc(background).toString()}`;
  } else if (validUrl.isUri(background)) {
    return `background-image: url("${background}")`;
  }
  return `background-color: ${tc('palegoldenrod')
    .spin(360 * Math.random())
    .toString()}`;
};
