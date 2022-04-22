// ------------------------------- external ---------------------------------------  //
import React from "react";

// -------------------------------- internal---------------------------------------  //
import classes from "./DisplayUserDetails.module.css";

function DisplayUserDetails({ userInfo, fetchUserDetails }) {
  
  // destructuring userInfo
  const {
    name: { title = "Title", first = "First", last = "Last" } = {},
    email = "email",
  } = userInfo || {};

  return (
    <div className={classes.grid}>
      <div>
        <h1>
          {title} {first} {last}
        </h1>
      </div>
      <h3>{email}</h3>
      <button className={classes.button} onClick={fetchUserDetails}>
        Reload
      </button>
    </div>
  );
}

export default DisplayUserDetails;
