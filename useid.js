import React, { useId } from 'react';

function MailForm() {
  const emailId = useId();
  const messageId = useId();

  return (
    <form>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input type="email" id={emailId} name="email" />
      </div>
      <div>
        <label htmlFor={messageId}>Message:</label>
        <textarea id={messageId} name="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

function App() {
  return (
    <div>
      <h1>Contact Us</h1>
      <MailForm />
      <MailForm />
      <MailForm />
    </div>
  );
}

export default App;
