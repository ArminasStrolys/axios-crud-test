import React from "react";

const User = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.surname}
      </p>
    </div>
  );
};

export default User;
