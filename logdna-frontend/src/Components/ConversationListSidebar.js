import React from 'react';
import '../Styles/ConversationListSidebar.css';

let conversations;

// Generate the test conversations
(function () {
  let convoArr = []
  let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan sollicitudin felis, non elementum erat rutrum id. Curabitur eu metus nec dui lacinia placerat condimentum sed elit. In luctus vel velit quis molestie. Integer vitae blandit neque, et tincidunt velit. Quisque posuere vitae urna iaculis lacinia. Duis egestas varius pretium. Sed mollis venenatis lorem, vel faucibus urna. Sed non interdum urna, eget consequat risus. Nunc at lectus leo. Suspendisse potenti. Nullam eu accumsan arcu. Duis molestie lorem neque. Pellentesque quis risus suscipit, congue mauris nec, accumsan libero. In hac habitasse platea dictumst. Maecenas vitae fermentum augue.'
  // Trim down the content to a preview length and add ellipses
  if (content.length > 175) {
    content = content.substr(0, 175)
    content = `${content}...`
  }
  for (let i = 0; i <= 14; i++) {
    convoArr.push({title: 'Lorem Ipsum', content})
  }
  conversations = convoArr
})()


function ConversationListSidebar() {

  // Handle selecting conversation
  function handleClick(e) {
    e.preventDefault()
    let currentlySelected = document.getElementsByClassName('selected')
    if (currentlySelected.length) {
      for (let element of currentlySelected) {
        element.classList.remove('selected')
      };
    }
    e.currentTarget.classList.add('selected')
  }

  return (
    <div className="Conversation-list-container">

      { conversations.map( (conversation, i) => {
        return (
          <div className={`conversation ${i === 0 ? 'selected' : ''}`} key={i} onClick={handleClick}>
            <div>
              <p className="conversation-title">{conversation.title}</p>
              <p className="conversation-content">{conversation.content}</p>
            </div>
            <div className="triangle"></div>
          </div>
        )
      }) }

    </div>
  );
}

export default ConversationListSidebar;
