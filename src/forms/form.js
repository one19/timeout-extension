/* @flow */
import { h } from 'preact';
import styled from 'styled-components';

type Props = {
  children: any,
  onChange: ?Function,
  onSubmit: ?Function
};

const FormDefault = styled.form`display: inline-block;`;

const generateSubmissionObject = targetChildren => {
  // stupid children include numbered children, filter them out
  const namedFields = Object.keys(targetChildren).filter(e =>
    Number.isNaN(Number(e))
  );

  return namedFields.reduce((ret, fieldName) => {
    ret[fieldName] = targetChildren[fieldName].children[0].value;
    return ret;
  }, {});
};

const logChange = e =>
  console.log('change', e.target.className, e.target.value);
const logSubmit = e => {
  e.preventDefault();
  window.submit = e.target.children;
  return console.log('submitted', generateSubmissionObject(e.target.children));
};

export default function Form(props: Props) {
  const { children, onChange, onSubmit } = props;
  return (
    <FormDefault
      onChange={onChange || logChange}
      onSubmit={onSubmit || logSubmit}
    >
      {children}
    </FormDefault>
  );
}
