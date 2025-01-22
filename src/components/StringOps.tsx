import React, { useState } from "react";

const StringOps = () => {
  const [text, setText] = useState("");

  return (
    <div className="bg-neutral-400 grid justify-center p-24">
      <h3>String Ops</h3>
      <input
        type="text"
        className="p-3"
        onChange={(e) => setText(e.target.value.trim())}
      />
      <span className="text-white">Total letters {text.length}</span>
      <span className="text-white">Uppercase {text.toUpperCase()}</span>
      <span className="text-white">Lowercase {text.toLowerCase()}</span>
      <span className="text-white">Repeat {text.repeat(10)}</span>
      <span className="text-white">Slice {text.slice()}</span>
    </div>
  );
};

export default StringOps;
