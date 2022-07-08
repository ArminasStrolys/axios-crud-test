import React, { useState, useEffect } from 'react';
import Axios from "axios";

const Main = () => {

    const [userData, setUserData] = useState([])
 
    useEffect(() => {
        Axios.get("https://random-data-api.com/api/users/random_user?size=5").then((data) => {
            setUserData(data);
        });
      }, []);
    
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Main page</h2>
    </div>
  );
};

export default Main;
