/* @flow */
import { h } from 'preact';
import Select from '../forms/select';
import { zeroToNine } from '../constants';

const thisMonth = `0${new Date().getMonth() + 1}`.split('').slice(-2);
const firstDigits = ['0', '1', '?'];

export default () => [
  <Select name="m1" defaultValue={thisMonth[0]} options={firstDigits} />,
  <Select name="m2" defaultValue={thisMonth[1]} options={zeroToNine} />
];
