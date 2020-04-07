import React from 'react';
import ChatEvent from './chat-event';

export default function ChatLog(props) {

  const chatList= props.chatEvents.map(event => <ChatEvent key={event.participantId} type={event.type} message={event.message} time={event.time} timestamp={event.timestamp}/>);
  return (
  <div className="participant-list">
      {chatList}
  </div>);
}; 