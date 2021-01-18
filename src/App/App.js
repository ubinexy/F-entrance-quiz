import React, { Component } from 'react';
import Students from './Students';
import Teams from './Teams';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <section>
          <div className="section-header">
            <h3>分组列表</h3>
            <span className="group-button">分组学员</span>
          </div>
          <Teams props="" />
        </section>
        <section>
          <div className="section-header">
            <h3>学员列表</h3>
          </div>
          <Students />
        </section>
      </div>
    );
  }
}

export default App;
