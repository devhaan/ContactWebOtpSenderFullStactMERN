import React from "react";
import { Link } from "react-router-dom";

function ContactCard({ contact, setContactExpand }) {
  return (
    <div
      className="card m-5"
      style={{
        backgroundColor: "#593430",
        width: "16rem",
        boxShadow: "20px 10px 30px #0a0100",
        borderRadius: "25px 90px"
      }}
    >
      <img
        src="https://www.freeiconspng.com/thumbs/contact-icon-png/contact-icon-20.png"
        className="card-img-top m-4"
        alt="..."
        style={{ width: "3rem", height: "3rem",boxShadow: "10px 5px 15px #0a0100",borderRadius:"35%" }}
      />
      <div className="card-body">
        <Link
          to="/contactexpand"
          className="nav-link active text-warning"
          aria-current="page"
          onClick={() => {
            setContactExpand(contact.name);
          }}
        >
          <h5 className="card-title">Name : {contact.name} </h5>
        </Link>
      </div>
    </div>
  );
}

export default ContactCard;
