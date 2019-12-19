import React from 'react';
import '../Styles/ConversationListSidebar.css';

class ConversationListSidebar extends React.Component {

  state = {
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan sollicitudin felis, non elementum erat rutrum id. Curabitur eu metus nec dui lacinia placerat condimentum sed elit. In luctus vel velit quis molestie.Integer vitae blandit neque, et tincidunt velit. Quisque posuere vitae urna iaculis lacinia. Duis egestas varius pretium. Sed mollis venenatis lorem, vel faucibus urna. Sed non interdum urna, eget consequat risus. Nunc at lectus leo. Suspendisse potenti. Nullam eu accumsan arcu. Duis molestie lorem neque. Pellentesque quis risus suscipit, congue mauris nec, accumsan libero. In hac habitasse platea dictumst. Maecenas vitae fermentum augue.',
    conversations: []
  }

  componentDidMount() {
    this.handleContentLength()
    window.addEventListener('resize', this.handleContentLength)
  }
  
  // Trim down the content to a preview length and add ellipses
  handleContentLength = () => {
    let convoArr = []
    let {content, title} = this.state
    let containerWidth = document.getElementsByClassName('Conversation-list-container')[0].offsetWidth
    let containerWidthMultiplier = this.getContainerWidthMultiplier(containerWidth)
    let contentTrimLength = containerWidth * containerWidthMultiplier;
    if (content.length > contentTrimLength) {
      content = content.substr(0, contentTrimLength)
      content = `${content}...`
    }
    for (let i = 0; i <= 14; i++) {
      convoArr.push({title, content})
    }
    this.setState({conversations: convoArr})
  }

  // Return a number to multiply the container width by to get an acceptable content length
  getContainerWidthMultiplier = (containerWidth) => {
    let containerWidthMultiplier
    if (containerWidth >= 330) {
      containerWidthMultiplier = 0.5
    } else if (containerWidth < 330 && containerWidth >= 170) {
      containerWidthMultiplier = 0.397
    } else {
      containerWidthMultiplier = 0.3
    }
    return containerWidthMultiplier
  }

  // Style selected conversations
  handleClick = (e) => {
    e.preventDefault()
    let currentlySelected = document.getElementsByClassName('selected')
    if (currentlySelected.length) {
      for (let element of currentlySelected) {
        element.classList.remove('selected')
      };
    }
    e.currentTarget.classList.add('selected')
  }

  render() {
    let {conversations} = this.state

    return (
      <div className="Conversation-list-container">
        { conversations.map( (conversation, i) => {
          return (
            <div className={`conversation ${i === 0 ? 'selected' : ''}`} key={i} onClick={this.handleClick}>
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
}

export default ConversationListSidebar;
