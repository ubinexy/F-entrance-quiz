import React from 'react';
import './App.scss';

const data = [
  {
    name: '1 组',
    member: [1, 2],
  },
  {
    name: '2 组',
    member: [3, 4],
  },
];

const Teams = () => {
  return (
    data.length !== 0 && (
      <div>
        {data.map((team) => {
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
};

export default Teams;
