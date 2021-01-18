import React, { Component } from 'react';
import './App.scss';

class Teams extends Component {
  render() {
    return (
      this.props.data.length !== 0 && (
        <div>
          {this.props.data.map((team) => {
            return (
              <div>
                <div className="subsection-header" key={team.name}>
                  {team.name}
                </div>
                <div className="subsection-body">
                  {team.member.map((x) => (
                    <div className="box"> {x} </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )
    );
  }
}

export default Teams;
