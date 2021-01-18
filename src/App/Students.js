import React, { Component } from 'react';
import './App.scss';

class Students extends Component {
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
          onKeyUp={this.keyPress}
          placeholder="+ 添加学员"
        />
      </div>
    );
  }
}

export default Students;
