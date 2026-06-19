import { useState } from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";

import ChatbotIcon from "../components/chatbotWidget/ChatbotIcon";

import ChatbotPopup from "../components/chatbotWidget/ChatbotPopup";

function MainLayout() {

  const [openChat, setOpenChat] =
    useState(false);

  return (

    <>

      <Navbar />

      <main className="min-h-screen">

        <Outlet />

      </main>

      <Footer />

      <ChatbotIcon

        onClick={() =>

          setOpenChat(

            !openChat

          )

        }

      />

      <ChatbotPopup

        open={openChat}

        onClose={() =>
          setOpenChat(false)
        }
      />
    </>

  );

}

export default MainLayout;