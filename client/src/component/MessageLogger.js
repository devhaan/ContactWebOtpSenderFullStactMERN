import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageCard from "./MessageCard";
function ContactList({setContactExpand}) {
  const [messageLogList, setMessageLogList] = useState([]);

  useEffect(() => {
    fetchMessageLogList();
  }, []);
  const fetchMessageLogList = async () => {
    const data = await axios.get("http://localhost:8000/contactmessegeLog");
    const messageLogs= await data.data;
    messageLogs.reverse();
    setMessageLogList(messageLogs);
   
  };

  return (
    <div className="text-danger p-2 bd-highlight ">
      <div className="d-flex flex-wrap m-3 justify-content-center">
        {messageLogList.map((messageLog) => (
          <MessageCard messageLog={messageLog}  />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
