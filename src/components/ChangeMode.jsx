import React, { useState } from "react";
import "./ChangeMode.css";

const ChangeMode = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <button onClick={changeTheme}>Dark Mode</button>
    </div>
  );
};

export default ChangeMode;
