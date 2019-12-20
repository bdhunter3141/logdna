import React from 'react';
import '../Styles/Messages.css';
import MessageForm from '../Components/MessageForm'
import IndividualMessage from '../Components/IndividualMessage'

class Messages extends React.Component {

  state = {
    messages: [],
    errors: []
  }

  componentDidMount() {
    this.getMessages()
  }

  getMessages = () => {
    fetch(`${process.env.REACT_APP_DATABASE_URL || 'http://localhost:3000'}/messages`)
      .then(res => res.json())
      .then(messages => {
        for (let message of messages) {
          this.addMessageToState(message)
        }
      })
      .catch(err => this.addErrorToState(err))
  }

  addMessageToState = (message) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }))
  }

  displayError = () => {
    return (
    <div className="error-message-container">
      <p className="error-message-title">Sorry, something went wrong:</p>
    {this.state.errors.map((error, i) => {
      return (<p className="error-message" key={i}>{error.message}</p>)
      })}
    </div>
    )
  }

  addErrorToState = (error) => {
    this.setState(prevState => ({
      errors: [...prevState.errors, error]
    }))
  }

  render() {
    let {messages, errors} = this.state

  return (
    <div className='messages-container'>
      <div>
        <h2>Aenan cursus efficitur tellus sed luctus.</h2>
        <h3>Proin sed justo a ligula lobortis suscipit ut vel urna.</h3>
        <p>Aliquam interdum turpis nisl, eu posuere lorem molestie nec. Curabitur dictum ullamcorper nisi id mollis. Sed urna sem, porttitor nec tempor sit amet, lacinia eget lectus. Donec quis felis ultricies, tristique nulla vitae, gravida erat. Suspendisse turpis ligula, varius in faucibus sit amet, egestas non orci. Praesent pretium mi dui, vitae gravida justo viverra nec. Nullam ullamcorper massa tortor, quis placerat nibh rutrum vel. Vivamus blandit ligula lacinia tincidunt vulputate. Proin odio orci, suscipit et fermentum at, tempus et ipsum. Suspendisse egestas ligula vehicula, lacinia leo eget, aliquam ex.</p>
        <div className='message-image-container'>
          <div className='message-image-placeholder'></div>
          <p className='image-caption'>Aenean ac tincidunt diam.</p>
        </div>
      </div>
      {
        messages.length ?
          messages.map((message, i) => {
            return (<IndividualMessage key={i} message={message.message} />)
          })
        : null
      }
    { errors.length ? this.displayError() : null }
      <MessageForm addMessageToState={this.addMessageToState} addErrorToState={this.addErrorToState} />
    </div>
  )};
}

export default Messages;
