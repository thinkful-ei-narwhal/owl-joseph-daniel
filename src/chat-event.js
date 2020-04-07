import React from 'react';

export default function ChatEvent(props) {

  const specialClassName = `Chat-event ${props.type}`;
  let time = new Date(props.time);
  time = toString(time);

  if (!props.type === 'message') {

    return (
      <div className={specialClassName}>
        <p>{props.name}</p>
      </div>
    )
  } else {
    return (
      <div className="Chat-event message">
        <img src={props.avatar} alt={props.name}/>
        <h3>{props.name}</h3><span>{time}</span>
        <p>{props.message}</p>
      </div>
    );
  }
};