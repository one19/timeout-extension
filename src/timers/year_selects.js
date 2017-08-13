/* @flow */
import { h } from 'preact';
import Select from '../forms/select';
import { zeroToNine } from '../constants';

const thisYear = new Date().getFullYear().toString().split('');

export default () => [
  <Select name="y1" defaultValue={thisYear[0]} options={zeroToNine} />,
  <Select name="y2" defaultValue={thisYear[1]} options={zeroToNine} />,
  <Select name="y3" defaultValue={thisYear[2]} options={zeroToNine} />,
  <Select name="y4" defaultValue={thisYear[3]} options={zeroToNine} />
];
