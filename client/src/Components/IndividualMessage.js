import React from 'react';
import '../Styles/IndividualMessage.css';

function IndividualMessage(message) {
  return (
    <div className="individual-message-container">
      <span className="message-label">Message:</span> {message.message}
    </div>
  );
}

export default IndividualMessage;