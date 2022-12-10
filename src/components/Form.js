import React from "react";

function Form({
  firstName,
  lastName,
  onFirstNameChange,
  onLastNameChange,
  onNewsletterChange,
  newsetter,
}) {
  return (
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={onNewsletterChange}
        checked={newsetter}
      />
      <input type="text" value={firstName} onChange={onFirstNameChange} />
      <input type="text" value={lastName} onChange={onLastNameChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
