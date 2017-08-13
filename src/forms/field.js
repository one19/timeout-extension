/* @flow */
import { h, Component } from 'preact';
import styled from 'styled-components';

type Props = {
  defaultValue: any,
  onSubmit: Function,
  onChange: Function,
  error?: string,
  children: any,
  name?: string
};

const PrimaryField = styled.div`
  box-sizing: content-box;
  display: inherit;
`;

export default class Field extends Component {
  constructor(props: Props) {
    super(props);
    this.state = { value: props.defaultValue || null };
  }
  render() {
    const { onSubmit, children, name = 'field', ...rest } = this.props;
    // const functionalChild = children.find(e => typeof e === 'function');
    const onChange = e => this.setState({ value: e.target.value });
    return (
      <PrimaryField name={name}>
        {children[0]({ value: this.state.value, onChange, onSubmit, rest })}
      </PrimaryField>
    );
  }
}
