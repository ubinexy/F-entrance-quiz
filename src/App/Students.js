import React, { Component } from 'react';
import './App.scss';

class Students extends Component {
  keyUp = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      const name = e.target.value;
      e.target.value = '';
      this.props.addStudent(name);
    }
  };

  render() {
    return (
      <div className="box-container">
        {this.props.data.map((student) => (
          <div className="box" key={student.id}>
            {student.id}. {student.name}
          </div>
        ))}
        <input
          className="box add-button"
          type="text"
          onKeyUp={this.keyUp}
          placeholder="+ 添加学员"
        />
      </div>
    );
  }
}

export default Students;
