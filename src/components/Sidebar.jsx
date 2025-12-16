import React, { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      {/* MAIN SIDEBAR */}
      <div className="sidebar">
        <div
          className="icon"
          onClick={() => {
            setOpen(!open);
            setSearchOpen(false);
          }}
        >
          <FiMenu size={24} />
        </div>

        <div
          className="icon"
          onClick={() => {
            setSearchOpen(!searchOpen);
            setOpen(false);
          }}
        >
          <FiSearch size={24} />
        </div>
      </div>

      {/* MENU SIDEBAR */}
      <div className={`dropdown-menu ${open ? "open" : ""}`}>
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li
            onClick={() => {
              setContactOpen(true);
              setOpen(false);
              setSearchOpen(false);
            }}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* SEARCH SIDEBAR */}
      <div className={`search-panel ${searchOpen ? "open" : ""}`}>
        <div className="search-content">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>
      </div>

      {/* CONTACT MODAL */}
      {contactOpen && (
        <div
          className="contact-overlay"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/contact.png" alt="Contact" />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
