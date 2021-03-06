import React, { useState, useEffect } from "react";
import Axios from "axios";
import User from "../user/User";

const Main = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get("https://random-data-api.com/api/users/random_user?size=5").then(
      (data) => {
        setUserData(data.data);
      }
    );
  }, []);



const getNames = (name, surname) => {
    updateUser(name, surname)
}

const updateUser = (name, surname) => {
    Axios.put("http://localhost:3001/update", {
      name: name,
      surname: surname,
    })
  };

  console.log(userData);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Main page</h2>
      <br />
      {userData.length > 1 &&
        userData.map((user) => (
          <User
            key={user.id}
            name={user.first_name}
            surname={user.last_name}
            avatar={user.avatar}
            city={user.address.city}
            state={user.address.state}
            street={user.address.street_address}
            gender={user.gender}
            socialId={user.social_insurance_number}
            getNames={getNames}
          />
        ))}
    </div>
  );
};

export default Main;
