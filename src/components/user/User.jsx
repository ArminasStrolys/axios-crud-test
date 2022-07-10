import React from "react";

const User = (props) => {
  return (
    <div
      style={{
        margin: "30px auto",
        border: "1px solid darkGray",
        width: "50%",
        height: "70px",
        backgroundColor: "lightGray",
      }}
    >
      <img
        style={{ width: "70px", float: "left" }}
        src={props.avatar}
        alt="Something went wrong"
      />
      <span style={{ position: "relative", right: "70px", bottom: "18px" }}>
        <b>
          {props.name} <span style={{ color: "darkRed" }}>{props.surname}</span>
        </b>
      </span>
      <p style={{ position: "relative", bottom: "30px", left: "20px" }}>
        <b>Address:</b> {props.city}, {props.state}. {props.street}.
      </p>
      <p style={{ position: "relative", bottom: "40px", left: "20px" }}>
        <b>Gender:</b> {props.gender}.
      </p>
      <p style={{ position: "relative", bottom: "50px", left: "90px" }}>
        <b>Soc. num.:</b> {props.socialId}.
      </p>
      <button
        style={{
          position: "relative",
          bottom: "112px",
          right: "40px",
          backgroundColor: "white",
          width: "20px",
          height: "20px",
          textAlign: "center",
          color: "red",
          lineHeight: "10px",
        }}
      >
        +
      </button>
    </div>
  );
};

export default User;
