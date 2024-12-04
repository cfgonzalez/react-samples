import React, { useState } from "react";

export const ObjectSample = () => {

  const [person, setPerson] = useState({
    firstName: 'Pedro',
    lastName: 'Lopez',
    email: 'pedro.lopez@porahi.com'
  });

  let lastRender = new Date();
  const formattedTime = lastRender.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });


  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return(
    <div>
      <h4>Object Sample</h4>
      <div>{" Requiere crear una nueva copia del objeto"}</div>
      <div>
        <label>
          First Name
          <input value={person.firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last Name
          <input value={person.lastName} onChange={handleLastNameChange} />
        </label>
        <label>
          Mail
          <input value={person.email} onChange={handleEmailChange} />
        </label>
      </div>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </div>
  );
}