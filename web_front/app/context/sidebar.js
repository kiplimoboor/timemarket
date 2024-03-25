import { createContext, useContext, useState } from "react";

const SideBarContext = createContext(false);

const SideWrapper = ({ children }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

const useSideContext = () => {
  return useContext(SideBarContext);
};

export { SideWrapper, useSideContext };
