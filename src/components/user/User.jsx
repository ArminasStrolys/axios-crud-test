import React from "react";

const User = (props) => {
  return (
    <div
      style={{
        margin: "30px auto",
        border: "1px solid darkGray",
        width: "50%",
        backgroundColor: "lightGray",
      }}
    >
      <img style={{ width: "70px" }} src={props.avatar} alt="" />
      <span style={{ position: "relative", right: "70px", bottom: "75px" }}>
        {props.name} {props.surname}
      </span>
    </div>
  );
};

export default User;
