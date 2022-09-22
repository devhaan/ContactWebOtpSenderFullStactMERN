import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
function ContactList({setContactExpand}) {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    fetchContactList();
  }, []);
  const fetchContactList = async () => {
    const data = await axios.get("http://localhost:8000/");
    const contacts = await data.data;
    // console.log(contacts)
    setContactList(contacts);
  };

  return (
    <div className="text-danger p-2 bd-highlight ">
      <div className="d-flex flex-wrap m-3 justify-content-center">
        {contactList.map((contact) => (
          <ContactCard contact={contact} setContactExpand={setContactExpand} />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
