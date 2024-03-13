import { useState } from "react";
import { GlobalStyles } from "./base";
import { Hero, Portfolio, Sidebar, TicketInfo, WhatMore } from "./components";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenSidebar = () => {
    setIsOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  const closeSidebarDelay = () => {
    const time = setTimeout(() => {
      handleCloseSidebar();
    }, 400);

    return () => clearTimeout(time);
  };

  return (
    <>
      <GlobalStyles />
      <Sidebar onCloseSidebar={closeSidebarDelay} isOpen={isOpen} />
      <Hero onOpenSidebar={handleOpenSidebar} />
      <Portfolio />
      <TicketInfo />
      <WhatMore />
      <GetStarted />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
