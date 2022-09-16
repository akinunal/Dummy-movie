import React from "react";

const MovieCard = ({ src, children, style, onClick }) => {
  return (
    <div
      style={{
        padding: "30px 50px",
        backgroundImage:
          "linear-gradient(to right, rgba(84,0,0,1), rgba(0,18,54,1))",
        margin: "12px",
        borderRadius: "12px",
        maxWidth: "250px",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={onClick}
    >
      <div
        style={{
          height: "400px",
          width: "250px",
          backgroundImage: `url(${src}), url("https://picsum.photos/250/400")`,
          backgroundSize: "contain",
          backgroundRepeat: "round",
          borderRadius: "6px",
          ...style,
        }}
      />
      {children}
    </div>
  );
};

export default MovieCard;
