import React from 'react';
import store from './store';

export default function ChatEvent(props) {

  const item = store.participants.find(person => person.id === props.id);
  let finalTime = '';
  let event = '';
  let message = '';

  if (props.time) {
    let time = new Date(props.time);
    let hour = time.getHours();
    let minute = time.getMinutes();
    finalTime = `${hour}:${minute}`;
  }

  if (props.type === 'thumbs-up') {
    event = 'gave a thumbs up';
  } else if (props.type === 'thumbs-down') {
    event = 'gave a thumbs down';
  } else if (props.type === 'raise-hand') {
    event = 'raised their hand';
  } else if (props.type === 'clap') {
    event = 'clapped';
  } else if (props.type === 'join') {
    event = 'joined the room';
  } else if (props.type === 'leave') {
    event = 'left the room';
  } else if (props.type === 'join-stage') {
    event = 'joined the stage';
  } else if (props.type === 'leave-stage') {
    event = 'left the stage';
  }

  if (props.message) {
    message = props.message;
  }
  

  return (
    <div className="Chat-event">
      <img src={item.avatar} alt={item.name}/>
      <h3>{item.name}</h3>
      <p>{finalTime}</p>
      <p>{message}</p>
      <p>{event}</p>
    </div>
  );
};