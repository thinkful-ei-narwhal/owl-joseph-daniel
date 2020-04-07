import React from 'react';
import ChatEvent from './chat-event';

export default function ChatLog(props) {

  // console.log(props.chatEvents)

  const chatList= props.chatEvents.map(event => <ChatEvent id={event.participantId} type={event.type} message={event.message} time={event.time} timestamp={event.timestamp} name={event.name}/>);
  console.log(chatList);
  return (
  <div className="chat-list">
    <hr></hr>
      {chatList}
  </div>);
}; 