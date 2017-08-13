/* @flow */
import { h } from 'preact';
import styled from 'styled-components';
import Field from './field';

type Props = {
  onChange: Function,
  onSubmit: Function,
  placeholder?: string,
  error?: string,
  name?: string,
  type?: string,
  value: any
};

const PrimaryInput = styled.input`
  border: none;
  background-color: palegoldenrod;
  width: 15em;
  height: 1.4em;
  text-overflow: ellipsis;
  margin: 8px 8px;
`;

export default function Input(props: Props) {
  const { placeholder, type, ...rest } = props;
  return (
    <Field {...rest}>
      {({ onChange, onSubmit, value }) =>
        <PrimaryInput
          onChange={onChange}
          onSubmit={onSubmit}
          placeholder={placeholder || '-- Write here --'}
          value={value || ''}
          type={type}
        />}
    </Field>
  );
}
