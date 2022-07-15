import React, { useState } from "react";




function Form() {
  const [firstName, setFirstName] = useState("Gatwi");
  const [lastName, setLastName] = useState("Murithi");
  const [newsLetter, setNewsLetter] = useState(false);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNAmeChange(event) {
    setLastName(event.target.value);
  }

  function handleNewsLetterChange(event) {
    setNewsLetter(event.target.checked)
  }

  return (
    <form>
      <lable htmlFor="newsLetter">Subscribe to our Newsletter!</lable>
      <input type="checkbox" id="newsletter" onChange={handleNewsLetterChange} checked={newsLetter}></input>
      <input type="text" value={firstName} />
      <input type="text" value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
