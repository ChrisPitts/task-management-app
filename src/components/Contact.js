import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value});
  }
  handleMessageChange(event) {
    this.setState({ message: event.target.value});
  }
  render() {
    console.dir(this.state);
    return (
      <form>
        <label htmlFor='name'>Name</label><br/>
        <input type="text" name='name' id='name' value={this.state.name} onChange={this.handleNameChange.bind(this)} required/><br/>

        <label htmlFor='email'>Email</label><br/>
        <input type="email" name='email' id='email' value={this.state.email} onChange={this.handleEmailChange.bind(this)} required/><br/>

        <label htmlFor='message'>Message</label><br/>
        <textarea id='message' name='message' rows={10} value={this.state.message} onChange={this.handleMessageChange.bind(this)} required></textarea><br/>

        <button type="submit">Send</button>
    </form>
    )
  }
}
