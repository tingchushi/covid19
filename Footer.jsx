import React from "react";

export default function Footer() {
  return (
    <>
      <div style={{color:'lightslategray', backgroundColor:'lightslategray',padding:'10px'}}>
        {Array(5)
          .fill()
          .map((_, i) => (
            <span key={i} style={{color:'lightslategray', backgroundColor:'lightslategray',padding:'0px'}}>{i}</span>
          ))}
      </div>

      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          height: '100px',
          backgroundColor: '#04AA6D', margin:'0px',
          bordorRadius: '10px', 
        }}
      >
        footer
      </div>
    </>
  );
}