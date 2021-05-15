import React from "react";

const TitleNav = ({ childdren, title }) => {
  return (
    <nav className="bg-blue-600 h-12 text-white text-2xl shadow-xl flex items-center justify-center">
      {childdren}
      <h1>{title}</h1>
    </nav>
  );
};

export default TitleNav;
