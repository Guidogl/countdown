import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  async function createNewProfile() {
    var formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);

    fetch("https://a81f7cb9.eu-gb.apiconnect.appdomain.cloud/countdown", {
      method: "PUT",
      body: formData
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", JSON.stringify(response)));
  }

  return (
    <form className="container" onSubmit={createNewProfile()}>
      <label>
        Name
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
