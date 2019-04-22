import React from "react"

export default () => (
  <div>
    <h1>Kelowna Auto Loans</h1>
    <p>We know bad things happen to good people.</p>
    <form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" required />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" required />
      </div>

      {/* TODO: Address */}
      {/* TODO: Date of Birth */}

      <div>
        {/*
          TODO: Add JS functionality for pre-checked
          React requires event handlers for this state change
        */}
        <input type="checkbox" id="consent" required />
        <label htmlFor="consent">Consent to bureau check</label>
      </div>
      <div>
        <input type="submit" value="Let's Talk" />
      </div>
    </form>
  </div>
)
