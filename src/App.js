import React from 'react';
import ParticipantList from './participant-list.js';
import Stage from './stage';
import ChatLog from './chat-log';
import STORE from './store';
import './App.css';

export default function App() {

  const p = <ParticipantList participants={STORE.participants}/>;
  const s = <Stage participants={STORE.participants}/>;
  const c = <ChatLog chatEvents ={STORE.chatEvents}/>;
  
  return (
    <main className="App">
      <section>{p}</section>
      <section>{s}</section>
      <section>{c}</section>
  </main>
  );
};
