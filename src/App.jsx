import "./App.css";
import React from "react";
import CapsuleBanner from "./capsule/CapsuleBanner";

function App() {
  return (
     <div
      style={{
        display: "flex",
        justifyContent: "center", // horizontal center
        alignItems: "center",     // vertical center
        height: "100vh",          // full viewport height
        width: "100vw",           // full viewport width
        margin: 0,
        padding: 0,
      }}
    >

      <CapsuleBanner />
    </div>
  );
}

export default App;
