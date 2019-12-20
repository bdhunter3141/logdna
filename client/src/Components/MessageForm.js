import React from 'react';
import '../Styles/MessageForm.css';

class MessageForm extends React.Component {
  state = {
    message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.message) {
      return
    }
    fetch(`${process.env.REACT_APP_DATABASE_URL || 'http://localhost:3000'}/messages`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: this.state.message
      })
    })
    .then(res => console.log(res))
    .then(() => this.props.addMessageToState(this.state))
    .catch(err => console.log(err))
  }

  handleInput = (e) => {
    this.setState({message: e.target.value})
  }

  render() {
  return (
    <form className="Message-form-container" onSubmit={this.handleSubmit}>
      <input type='text' name='message' placeholder='Message...' onChange={this.handleInput} />
      <button type='submit' value="Submit">Submit</button>
    </form>
  )};
}

export default MessageForm;