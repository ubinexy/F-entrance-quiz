import React, { Component } from 'react';
import axios from 'axios';
import Students from './Students';
import Teams from './Teams';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get('http://localhost:8080/students')
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => {
        console.log('err:', err);
      });
  };

  keyPress = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      const name = e.target.value;
      e.target.value = '';
      axios
        .post(`http://localhost:8080/student?name=${  name}`)
        .then(() => {
          this.fetchData();
        })
        .catch((err) => {
          console.log('err:', err);
        });
    }
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <section>
          <div className="section-header">
            <h3>分组列表</h3>
            <span className="group-button">分组学员</span>
          </div>
          <Teams />
        </section>
        <section>
          <div className="section-header">
            <h3>学员列表</h3>
          </div>
          <Students data={this.state.data} keyPress={this.keyPress} />
        </section>
      </div>
    );
  }
}

export default App;
