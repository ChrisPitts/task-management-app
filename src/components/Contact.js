import React from 'react'

export default function Contact() {
  return (
    <form>
        <label htmlFor='name'>Name</label><br/>
        <input type="text" id='name'/><br/>

        <label htmlFor='email'>Email</label><br/>
        <input type="email" id='email'/><br/>

        <label htmlFor='message'>Message</label><br/>
        <textarea id='message' rows={10}></textarea><br/>

        <button type="submit">Send</button>
    </form>
  )
}
