import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ContactList from "./ContactList";
import ContactExpand from "./ContactExpand"
import AddContact from "./AddContact";
import My404Component from "./My404Component";

import MessageLogger from "./MessageLogger";

function App() {
  const [contactexpand,setContactExpand]=useState("");
  return (
    <div
      className="d-flex flex-column bd-highlight mb-3"
      style={{
        backgroundColor:"#b54538",
        height: "100%",
        width: "auto",
      }}
    >
      {/* <Navbar /> */}
      <Routes>
       
        <Route path="/" index exact element={<ContactList setContactExpand={setContactExpand}/>} />
        <Route path="/contactexpand"  exact element={<ContactExpand contactexpand={contactexpand}/>} />
        <Route path="/contactmessagelogs"  exact element={<MessageLogger/>} />
        <Route path="/contactadd"  exact element={<AddContact/>} />
        <Route path='*' element={<My404Component/>} />
      </Routes>
    </div>
  );
}

export default App;
