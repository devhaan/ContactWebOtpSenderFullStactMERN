import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
function ContactExpand({ contactexpand, setContactExpand }) {
  const [contact, setContact] = useState([{}]);
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetchContactDetails();
  }, []);
  const fetchContactDetails = async () => {
    const data = await axios.post(
      "http://localhost:8000/contactdetails",
      `contactName=${contactexpand}`
    );
    const contacts = await data.data[0];
    setContact(contacts);
  };
  const senderMessage = async () => {
    const data = await axios.post(
      "http://localhost:8000/contactmessege",
      `number=${contact.phone}&message=${message}&name=${contact.name}`
    );
    setToggle(!toggle);
    alert(data.data.success);
  };
  return (
    <>
      <div
        className="card m-5 text-white"
        style={{
          width: "16rem",
          backgroundColor: "#0a0f3d",
          boxShadow: "10px 5px 15px #888dba",
        }}
      >
        <img
          src="https://w7.pngwing.com/pngs/129/350/png-transparent-contact-friend-icon-pawn-person-symbol.png"
          className="card-img-top m-4"
          alt="..."
          style={{ width: "5rem", height: "5rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">Name : {contact.name} </h5>
        </div>
        <div className="card-body">
          <h5 className="card-title">Phone : {contact.phone} </h5>
        </div>
        <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
          Send Message
        </button>
      </div>
      {toggle && (
        <div
          className="card m-5"
          style={{
            width: "18rem",
            position: "absolute",
            top: "10rem",
            left: "35rem",
          }}
        >
          <div className="card-body">
            <h5 className="card-title text-center">Message </h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <input type="text" onChange={(e) => setMessage(e.target.value)} />{" "}
            </h5>
          </div>
          <div style={{ width: "100%" }}>
            <button
              className="btn m-1 btn-primary "
              onClick={senderMessage}
              style={{ width: "45%" }}
            >
              Send Message
            </button>
            <button
              className="m-1  btn btn-primary"
              onClick={() => {
                setToggle(!toggle);
              }}
              style={{ width: "45%" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactExpand;
