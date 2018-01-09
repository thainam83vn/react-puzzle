import React from 'react';
import { render } from 'react-dom';
import {Board} from './Board';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Board></Board>
  </div>
);

render(<App />, document.getElementById('root'));
