import React from "react";

export default function HomeDisplay({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
