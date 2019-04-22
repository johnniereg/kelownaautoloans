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
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" required />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="birthdate">Date of birth</label>
        <input type="date" name="birthdate" id="birthdate" />
      </div>

      <div>
        <label htmlFor="address1">Address</label>
        <input type="text" name="address1" id="address1" />
      </div>

      <div>
        <label htmlFor="address2">Address</label>
        <input type="text" name="address2" id="address2" />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />
      </div>

      <div>
        <label htmlFor="province">Province</label>
        <input type="text" name="province" id="province" />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <input type="text" name="province" id="country" />
      </div>

      <div>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" name="postal" id="postal" />
      </div>

      <div>
        {/*
          TODO: Add JS functionality for pre-checked
          React requires event handlers for this state change
        */}
        <input type="checkbox" id="consent" defaultChecked />
        <label htmlFor="consent">Consent to bureau check</label>
      </div>
      <div>
        <input type="submit" value="Let's Talk" />
      </div>
    </form>
  </div>
)
