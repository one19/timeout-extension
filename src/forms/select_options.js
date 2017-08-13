/* @flow */
import { h } from 'preact';
import styled from 'styled-components';

type Props = {
  options: Array<string>,
  value: any
};

const PrimeOption = styled.option`
  border: none;
  background-color: palegoldenrod;
`;

export default function SelectOptions(props: Props) {
  const { options, value, defaultValue: lowestValue } = props;
  return options.map(option => {
    const selected = option === value;
    const nonRandomOptions = options.slice(0, -1);
    const optionsAboveNow = nonRandomOptions.filter(
      e => Number(e) >= lowestValue
    );
    const assignedOption =
      option === '?'
        ? optionsAboveNow[Math.floor(Math.random() * optionsAboveNow.length)]
        : option;
    return (
      <PrimeOption selected={selected} value={assignedOption}>
        {option}
      </PrimeOption>
    );
  });
}
