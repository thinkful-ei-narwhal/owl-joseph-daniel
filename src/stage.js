import React from 'react';
import StagePart from './stage-part';

export default function Stage(props) {

  const newList= props.participants.map(part => <StagePart key={part.id} name={part.name} avatar={part.avatar} inSession={part.inSession} onStage={part.onStage}/>);

  return (
  <div className="participant-list">
    {newList}
  </div>);
}; 