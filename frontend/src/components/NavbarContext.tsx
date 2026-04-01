import { createContext, useState, ReactNode } from "react";

interface NavbarContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
}

export const NavbarContext = createContext<NavbarContextType>({
  activeTab: "Home",
  setActiveTab: () => {},
  tabs: ["Home", "Projects", "About"],
});

interface NavbarProviderProps {
  children: ReactNode;
}
export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = ["Home", "Projects", "About"];

  return (
    <NavbarContext.Provider value={{ activeTab, setActiveTab, tabs }}>
      {children}
    </NavbarContext.Provider>
  );
};
