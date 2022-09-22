import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
function ContactList({ setContactExpand }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    addContact();
  }, []);
  const addContact = async () => {
    const data = await axios.post(
      "http://localhost:8000/contactadd",
      `contactName=${name}&contactPhone=${phone}`
    );
    const contacts = await data.data;
    alert(contacts.success);
  };

  return (
    <div
      className="card m-5"
      style={{
        backgroundColor: "#593430",
        width: "16rem",
        boxShadow: "20px 10px 30px #0a0100",
        borderRadius: "25px 90px",
      }}
    >
      <img
        src="https://www.freeiconspng.com/thumbs/contact-icon-png/contact-icon-20.png"
        className="card-img-top m-4"
        alt="..."
        style={{ width: "5rem", height: "5rem" }}
      />
      <div className="card-body ml-3">
        <label className="text-white">Name </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="card-body ml-3">
        <label className="text-white">Phone </label>
        <input type="text" onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-primary ml-5"
          onClick={addContact}
        >
          ADD Contact
        </button>
      </div>
    </div>
  );
}

export default ContactList;
