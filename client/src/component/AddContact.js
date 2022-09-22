import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
import Navbar from "./Navbar";
function ContactList({ setContactExpand }) {
  const [name, setName] = useState("dummy");
  const [phone, setPhone] = useState("dummy");

  useEffect(() => {
  }, []);
  const addContact = async () => {
    if (name === "dummy" || name === null || phone === null || phone === "dummy" || phone[0] != "+") {
          if(phone[0]!== "+") {alert("Please Add proper country code like this +912345678909")}
          else{alert("Please Enter Both field")}
    } else {
      const data = await axios.post(
        "http://localhost:8000/contactadd",
        `contactName=${name}&contactPhone=${phone}`
      );
      const contacts = await data.data;
      alert(contacts.success);
    }
    console.log("hii")
  };

  return (
    <>
      <Navbar />
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
    </>
  );
}

export default ContactList;
