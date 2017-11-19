import * as React from 'react';
import MyCounter from './MyCounter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyCounter name="123" />
      </div>
    );
  }
}

export default App;
