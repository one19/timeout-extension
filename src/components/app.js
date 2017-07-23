import { h, Component } from 'preact';
import Background from './background';
import H1 from './h1';

export default class App extends Component {
  componentWillMount() {
    this.firebaseRef = new Firebase(
      'https://glowing-heat-4029.firebaseio.com/im-doin'
    );
    this.firebaseRef.on('value', dataSnapshot =>
      this.setState(dataSnapshot.val())
    );
  }

  render() {
    const { message = 'Loading...', background } = this.state;

    return (
      <Background background={background}>
        <H1>
          {message}
        </H1>
      </Background>
    );
  }
}
