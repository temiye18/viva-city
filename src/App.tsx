import { useState } from "react";
import { GlobalStyles } from "./base";
import {
  Header,
  Hero,
  Portfolio,
  Sidebar,
  TicketInfo,
  WhatMore,
  GetStarted,
  Contact,
  Footer,
  Faq,
} from "./components";

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
      <Header onOpenSidebar={handleOpenSidebar} />
      <Hero />
      <Portfolio />
      <TicketInfo />
      <WhatMore />
      <GetStarted />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
