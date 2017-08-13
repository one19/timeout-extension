/* @flow */
import { h } from 'preact';
import Select from '../forms/select';
import { zeroToNine } from '../constants';

const thisDay = `0${new Date().getHours()}`.split('').slice(-2);
const firstDigits = ['0', '1', '2', '?'];

export default () => [
  <Select name="h1" defaultValue={thisDay[0]} options={firstDigits} />,
  <Select name="h2" defaultValue={thisDay[1]} options={zeroToNine} />
];
