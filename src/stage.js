import React from 'react';
import StagePart from './stage-part';

export default function Stage(props) {

  let newList = props.participants.filter(person => person.onStage);
  const onStageList= newList.map(part => <StagePart key={part.id} name={part.name} avatar={part.avatar} inSession={part.inSession} onStage={part.onStage}/>);

  console.log(newList[0])

  return (
  <div className="participant-list">
    {onStageList}
  </div>);
}; 