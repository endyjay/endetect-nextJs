"use client"
import React from "react";

const ContactForm = () => {

  return (

    <div className="h-auto">
      <iframe 
          src="/static/html/index.html" 
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          title="Embedded HTML"
      />
    </div>
  );
};

export default ContactForm;
