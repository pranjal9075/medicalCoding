import React, { useState, useEffect } from "react";
import RegisterPopup from "../Component/RegisterPopup";
import SocialIcons from "../Component/SocialIcons";
import InquiryPopup from "../Component/InquiryPopup";
import Home from "./Pages/Home";

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // AUTO OPEN REGISTER POPUP ON PAGE LOAD
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRegisterOpen(true);
    }, 1000); // popup after 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleRegisterClose = () => {
    setIsRegisterOpen(false);
    setIsInquiryOpen(true); // Register closed → Inquiry opens
  };

  return (
    <>
      <Home />

      {/* Register Popup */}
      <RegisterPopup 
        isOpen={isRegisterOpen} 
        onClose={handleRegisterClose} 
      />

      {/* Inquiry Popup */}
      {isInquiryOpen && (
        <InquiryPopup 
          autoOpenDelay={0} // turant open
          onClose={() => setIsInquiryOpen(false)}
        />
      )}

      <SocialIcons />
    </>
  );
}

export default App;
