/* @flow */
import { h } from 'preact';
import styled from 'styled-components';
import Field from './field';
import SelectOptions from './select_options';

type Props = {
  onChange: Function,
  onSubmit: Function,
  options: Array<string>,
  error?: string,
  name?: string,
  value: any,
  defaultValue?: any
};

const PrimarySelect = styled.select`
  border: none;
  background-color: palegoldenrod;
  height: 1.4em;
`;

export default function Input(props: Props) {
  const { options, defaultValue, ...rest } = props;
  return (
    <Field {...rest}>
      {({ onChange, onSubmit, value }) =>
        <PrimarySelect
          onChange={onChange}
          onSubmit={onSubmit}
          value={value || defaultValue || ''}
          multiple="false"
          size="2"
        >
          {SelectOptions({ value, options, defaultValue })}
        </PrimarySelect>}
    </Field>
  );
}
