/* @flow */
import { h } from 'preact';
import Select from '../forms/select';
import { zeroToNine } from '../constants';

const thisDay = `0${new Date().getDate()}`.split('').slice(-2);
const firstDigits = ['0', '1', '2', '3', '?'];

export default () => [
  <Select name="d1" defaultValue={thisDay[0]} options={firstDigits} />,
  <Select name="d2" defaultValue={thisDay[1]} options={zeroToNine} />
];
