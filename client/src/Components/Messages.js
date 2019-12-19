import React from 'react';
import '../Styles/Messages.css';
import MessageForm from '../Components/MessageForm'
import IndividualMessage from '../Components/IndividualMessage'

class Messages extends React.Component {
  
  state = {
    messages: []
  }

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    let {messages} = this.state

  return (
    <div className='Messages-container'>
      <div>
        <h2>Aenan cursus efficitur tellus sed luctus.</h2>
        <h3>Proin sed justo a ligula lobortis suscipit ut vel urna.</h3>
        <p>Aliquam interdum turpis nisl, eu posuere lorem molestie nec. Curabitur dictum ullamcorper nisi id mollis. Sed urna sem, porttitor nec tempor sit amet, lacinia eget lectus. Donec quis felis ultricies, tristique nulla vitae, gravida erat. Suspendisse turpis ligula, varius in faucibus sit amet, egestas non orci. Praesent pretium mi dui, vitae gravida justo viverra nec. Nullam ullamcorper massa tortor, quis placerat nibh rutrum vel. Vivamus blandit ligula lacinia tincidunt vulputate. Proin odio orci, suscipit et fermentum at, tempus et ipsum. Suspendisse egestas ligula vehicula, lacinia leo eget, aliquam ex.</p>
        <div className='Message-image-container'>
          <div className='Message-image-placeholder'></div>
          <p className='image-caption'>Image Caption</p>
        </div>
      </div>
      {
        messages.length ? 
          messages.map((message, i) => {
            return (<IndividualMessage key={i} message={message} />)
          }) 
        : null
      }
      
      <MessageForm />
    </div>
  )};
}

export default Messages;
