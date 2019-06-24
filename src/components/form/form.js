import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function createNewProfile() {
    var formData = new FormData();

    formData.append("name", name);
    formData.append("phone", phone);
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
      <span className="contact-form-title">TRAVEL TOGETHER</span>
      <input
        className="wrap-input"
        placeholder="Your Name"
        value={name}
        type="text"
        onChange={e => setName(e.target.value)}
      />
      <input
        className="wrap-input"
        type="text"
        placeholder="Your Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <input
        className="wrap-input"
        type="text"
        placeholder="Your E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
