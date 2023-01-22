import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
  }
  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value});
  }
  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value});
  }
  handleMessageChange(event) {
    this.setState({ message: event.target.value});
  }
  render() {
    return (
      <form>
        <label htmlFor='first-name'>First Name</label><br/>
        <input type="text" name='first-name' id='first-name' value={this.state.firstName} onChange={this.handleFirstNameChange.bind(this)} required/><br/>
        <label htmlFor='last-name'>Last Name</label><br/>
        <input type="text" name='last-name' id='last-name' value={this.state.lastName} onChange={this.handleLastNameChange.bind(this)} required/><br/>
        <label htmlFor='email'>Email</label><br/>
        <input type="email" name='email' id='email' value={this.state.email} onChange={this.handleEmailChange.bind(this)} required/><br/>

        <label htmlFor='message'>Message</label><br/>
        <textarea id='message' name='message' rows={10} value={this.state.message} onChange={this.handleMessageChange.bind(this)} required></textarea><br/>

        <button type="submit">Send</button>
    </form>
    )
  }
}
