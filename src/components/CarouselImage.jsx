import React from "react";

export default function CarouselImage({ text }) {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        background: "#ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h2>{text}</h2>
    </div>
  );
}
