import React from "react";

export default function Hello() {
  const handleClick = () => {
    document.querySelector(".HelloMsg").style.display = "none";
    let hello = document.createElement("h1");
    hello.innerHTML = "HELLO WORLD";
    document.querySelector(".button").appendChild(hello);
  };
  return (
    <div className="button">
      <button className="HelloMsg" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}
