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
      data2: [],
    };
  }

  componentDidMount() {
    this.fetchStudentsData();
  }

  fetchStudentsData = () => {
    axios
      .get('http://localhost:8080/students')
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => {
        console.log('err:', err);
      });
  };

  addStudent = (name) => {
    axios
      .post(`http://localhost:8080/student?name=${name}`)
      .then(() => {
        this.fetchStudentsData();
      })
      .catch((err) => {
        console.log('err:', err);
      });
  };

  fetchPartitionData = () => {
    axios
      .get(`http://localhost:8080/partition`)
      .then((res) => {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i += 1) {
          for (let j = 0; j < res.data[i].member.length; j += 1) {
            console.log(res.data[i].member[j]);
            res.data[i].member[j] =
              `${res.data[i].member[j]  } ${  this.state.data[res.data[i].member[j] - 1].name}`;
          }
        }
        this.setState({
          data2: res.data,
        });
      })
      .catch((err) => {
        console.log('err:', err);
      });
  };

  render() {
    return (
      <div data-testid="app" className="App">
        <section>
          <div className="section-header">
            <h3>分组列表</h3>
            <div
              role="button"
              tabIndex={0}
              aria-hidden="true"
              className="group-button"
              onClick={() => this.fetchPartitionData()}
            >
              分组学员
            </div>
          </div>
          <Teams data={this.state.data2} />
        </section>
        <section>
          <div className="section-header">
            <h3>学员列表</h3>
          </div>
          <Students data={this.state.data} addStudent={this.addStudent} />
        </section>
      </div>
    );
  }
}

export default App;
