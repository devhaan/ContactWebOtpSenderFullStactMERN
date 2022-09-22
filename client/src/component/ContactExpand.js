import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
import Navbar from "./Navbar";
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
      <Navbar />{" "}
      <div className="d-flex flex-wrap m-3 justify-content-center">
        <div
          className="card m-5 text-white"
          style={{
            width: "16rem",
            backgroundColor: "#0a0f3d",
            boxShadow: "20px 10px 30px #0a0100",
            borderRadius: "25px 90px",
          }}
        >
          <img
            src="https://w7.pngwing.com/pngs/129/350/png-transparent-contact-friend-icon-pawn-person-symbol.png"
            className="card-img-top m-4"
            alt="..."
            style={{ width: "5rem", height: "5rem" }}
          />
          <div className="card-body ml-2">
            <h5 className="card-title">Name : {contact.name} </h5>
          </div>
          <div className="card-body ml-2">
            <h5 className="card-title">Phone : {contact.phone} </h5>
          </div>
          <div className="m-5">
            <button
              className="btn btn-primary m-2"
              onClick={() => setToggle(!toggle)}
            >
              Send Message
            </button>
          </div>
        </div>
        {toggle && (
          <div
            className="card m-5"
            style={{
              width: "50%",
              position: "absolute",
              top: "20%",
              left: "20%",
            }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">Message </h5>
            </div>
            <div className="card-body">
              <h5 className="card-title m-1">
                <input
                  type="text"
                  style={{ width: "100%", height: "6rem" }}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </h5>
            </div>
            <div style={{ width: "100%" }}>
              <button
                className="btn m-2 btn-primary "
                onClick={senderMessage}
                style={{ width: "45%" }}
              >
                Send Message
              </button>
              <button
                className="m-2  btn btn-primary"
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
      </div>
    </>
  );
}

export default ContactExpand;
