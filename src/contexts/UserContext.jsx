import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ userName: "clevercoderjoy", loggedIn: false }}>{children}</UserContext.Provider>
  )
}
