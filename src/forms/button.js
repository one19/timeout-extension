/* @flow */
import { h } from 'preact';
import styled from 'styled-components';

type Props = {
  type?: String,
  children: any
};

const ButtonPrimary = styled.button`
  height: 1.4em;
  width: 9em;
  padding: 1px;
  border: none;
  border-radius: 0;
  background-color: palegoldenrod;
`;

export default function Button(props: Props) {
  const { type, children = 'Submit' } = props;
  return (
    <ButtonPrimary type={type === 'submit' ? 'submit' : 'button'}>
      {children}
    </ButtonPrimary>
  );
}
