import React from 'react';
import './Styles/App.css';
import Header from './Components/Header'
import Messages from './Components/Messages'
import GroupListSidebar from './Components/GroupListSidebar'
import ConversationListSidebar from './Components/ConversationListSidebar'

function App() {
  return (
    <div className="App">
      <Header />
      <Messages />
      <div className="App-sidebar">
        <GroupListSidebar />
        <ConversationListSidebar />
      </div>
    </div>
  );
}

export default App;
