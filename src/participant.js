import React from 'react';

export default function Participant(props) {

if (props.inSession) {

const status = props.OnStage ? 'on stage' : 'in session';

  return (
    <div className="Participant">
      <img src={props.avatar} />
      <h3>{props.name}</h3>
      <p>{status}</p>
    </div>
  );
} else {
  return '';
}
}

