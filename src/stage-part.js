import React from 'react';

export default function StagePart(props) {

  return (
    <div className="StagePart">
      <h3>{props.name}</h3>
      <img src={props.avatar} alt={props.name}/>
    </div>
  );
};