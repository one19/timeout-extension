/* @flow */
import { h } from 'preact';
import Select from '../forms/select';
import { zeroToNine } from '../constants';

const thisDay = `0${new Date().getMinutes()}`.split('').slice(-2);
const firstDigits = ['0', '1', '2', '3', '4', '5', '?'];

export default () => [
  <Select name="mi1" defaultValue={thisDay[0]} options={firstDigits} />,
  <Select name="mi2" defaultValue={thisDay[1]} options={zeroToNine} />
];
