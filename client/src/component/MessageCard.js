import React from "react";
import { Link } from "react-router-dom";

function MessageCard({ messageLog }) {
  return (
    <div
      className="card m-5 text-warning"
      style={{
        backgroundColor: "#593430",
        width: "20rem",
        boxShadow: "20px 10px 30px #0a0100",
        borderRadius: "25px 90px"
      }}
    >
      <img
        src="https://www.freeiconspng.com/thumbs/contact-icon-png/contact-icon-20.png"
        className="card-img-top m-5"
        alt="..."
        style={{ width: "4rem", height: "4rem",boxShadow: "10px 5px 15px #0a0100",borderRadius:"30%" }}
      />
      <div className="card-body">
        <h5 className="card-title m-3">Name :{messageLog.name} </h5>
        <h5 className="card-title m-3">Phone : {messageLog.phone} </h5>
        <h5 className="card-title m-3">Time : {messageLog.time} </h5>
        <h5 className="card-title m-3">Message : {messageLog.message} </h5>
      </div>
    </div>
  );
}

export default MessageCard;
