import React from 'react';
import '../Styles/ConversationListSidebar.css';

class ConversationListSidebar extends React.Component {

  state = {
    conversations: [],
    selected: "0"
  } 

  componentDidMount() {
    this.loadConversations()
    window.addEventListener('resize', this.loadConversations)
  }
  
  // Generate sample conversations and load into state
  loadConversations = () => {
    let convoArr = []
    let conversation = this.handleContentLength()
    for (let i = 0; i <= 14; i++) {
      convoArr.push(conversation)
    }
    this.setState({ conversations: convoArr })
  }

  // Sample Lorem Ipsum Content to use to fill conversation previews
  sampleConversation = {
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan sollicitudin felis, non elementum erat rutrum id. Curabitur eu metus nec dui lacinia placerat condimentum sed elit. In luctus vel velit quis molestie.Integer vitae blandit neque, et tincidunt velit. Quisque posuere vitae urna iaculis lacinia. Duis egestas varius pretium. Sed mollis venenatis lorem, vel faucibus urna. Sed non interdum urna, eget consequat risus. Nunc at lectus leo. Suspendisse potenti. Nullam eu accumsan arcu. Duis molestie lorem neque. Pellentesque quis risus suscipit, congue mauris nec, accumsan libero. In hac habitasse platea dictumst. Maecenas vitae fermentum augue.',
  }

  // Trim down the content to a preview length and add ellipses
  handleContentLength = () => {
    let {content} = this.sampleConversation
    let containerWidth = document.getElementsByClassName('conversation-list-container')[0].offsetWidth
    let containerWidthMultiplier = this.getContainerWidthMultiplier(containerWidth)
    let contentTrimLength = containerWidth * containerWidthMultiplier;
    if (content.length > contentTrimLength) {
      content = content.substr(0, contentTrimLength)
      content = `${content}...`
    }
    return { ...this.sampleConversation, content: content}
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

  // Handling the selection of conversations
  handleSelect = (e) => {
    e.preventDefault()
    this.setState({ selected: e.currentTarget.dataset.key})
  }

  render() {
    let {conversations, selected} = this.state

    return (
      <div className="conversation-list-container">
        { conversations.map( (conversation, i) => {
          return (
            <div className={`conversation ${ selected === `${i}` ? 'selected' : ''}`} key={i} data-key={i} onClick={this.handleSelect}>
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
