import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Presentation } from "./components/Presentation/Presentation";

import "./styles/main.css";

function App() {
  return (
    <>
      <div className="bg-banner h-[33.125rem] w-full">
        <Header />
        <Presentation />
        <div className="max-w-[60.625rem] h-[7.409rem] mx-auto bg-white rounded-[0.625rem] drop-shadow-cardsShadow">
          dasda
        </div>
      </div>
    </>
  );
}

export default App;
