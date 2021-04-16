import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import './App.css';

const projectID = '5704d74d-fb2a-46c5-99bb-52adc45e54b9';

const Chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
  );
};

// infinite scroll, logout, more customizations...

export default Chat;