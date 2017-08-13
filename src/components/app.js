import { h, Component } from 'preact';
import Background from './background';
import Form from '../forms/form';
import Button from '../forms/button';
import Input from '../forms/input';
import {
  yearSelects,
  monthSelects,
  daySelects,
  hourSelects,
  minuteSelects
} from '../timers';

const sendToBack = timer => {
  chrome.runtime.sendMessage(timer, res => console.log(res.message));
};

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

const convertTimeSelects = formObject => {
  const { y1, y2, y3, y4, m1, m2, d1, d2, h1, h2, mi1, mi2, name } = formObject;
  const year = `${y1}${y2}${y3}${y4}`;
  const month = `${Number(`${m1}${m2}`) - 1}`;
  const day = `${d1}${d2}`;
  const hour = `${h1}${h2}`;
  const minute = `${mi1}${mi2}`;
  const timeString = new Date(year, month, day, hour, minute).toString();
  return { timeString, name };
};

export default class App extends Component {
  handleOnSubmit(e) {
    e.preventDefault();
    const value = generateSubmissionObject(e.target.children);
    const timer = convertTimeSelects(value);
    sendToBack(timer);
    window.close();
  }

  render() {
    return (
      <Background>
        <Form onSubmit={this.handleOnSubmit}>
          {yearSelects()} -
          {monthSelects()} -
          {daySelects()},
          {hourSelects()}:{minuteSelects()}
          <Input
            name="name"
            placeholder="-- Enter the alarm name/text here --"
          />
          <Button type="submit">Make Alarm</Button>
        </Form>
      </Background>
    );
  }
}
