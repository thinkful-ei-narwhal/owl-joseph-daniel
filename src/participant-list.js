import React from 'react';
import Participant from './participant';

export default function ParticipantList(props) {

  const newList = props.participants.map(part => <Participant key={part.id} name={part.name} avatar={part.avatar} inSession={part.inSession} onStage={part.onStage}/>);

  return (
  <div className="participant-list">
      {newList}
  </div>);
}; 