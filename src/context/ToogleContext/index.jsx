import { createContext, useState } from "react";

const iconProps = {
  color: "white",
  size: 27,
};

export const ToogleContext = createContext();

export const HandleToogleProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <ToogleContext.Provider value={{ isMenuOpen, handleMenu, iconProps }}>
      {children}
    </ToogleContext.Provider>
  );
};
