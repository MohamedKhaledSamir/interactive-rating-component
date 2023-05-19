import { useState } from "react";
import Rate from "./components/Rate-Component/Rate";
import Thanks from "./components/Thanks-Component/Thanks";
import { createContext } from "react";

export const AppContext = createContext(null);
export default function App() {
  const [showThanks, setShowThanks] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  return (
    <AppContext.Provider
      value={{ showThanks, setShowThanks, selectedNumber, setSelectedNumber }}
    >
      <div className="container">{showThanks ? <Thanks /> : <Rate />}</div>
    </AppContext.Provider>
  );
}
