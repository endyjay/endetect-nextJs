"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className=" scrollbar-hide">
      <iframe
        className="w-full"
        src="/static/html/index.html"
        width="100%"
        height="750px"
        style={{ border: "none" }}
        title="Embedded HTML"
      />
    </div>
  );
};

export default ContactForm;
