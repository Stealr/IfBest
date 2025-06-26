import React from "react";
import "./Tag.scss";

const Tag = ({ title }) => {
  if (!title) return null; 
  return (
    <div className="tag">
      {title}
    </div>
  );
};

export default Tag;