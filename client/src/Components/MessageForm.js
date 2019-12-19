import React from 'react';
import '../Styles/MessageForm.css';

class MessageForm extends React.Component {
  state = {
    message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
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