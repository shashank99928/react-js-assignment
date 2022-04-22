// ------------------------------- external ---------------------------------------  //
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import _ from "lodash";

// -------------------------------- internal---------------------------------------  //
import DisplayUserDetails from "./component/DisplayUserDetails";
import {
  saveUserDetailsInLocalStorage,
  getUserDetailsFromLocalStorage,
} from "./utils";
import "./App.css";

const baseURL = "https://randomuser.me/api";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  async function fetchUserDetails() {
    const response = await axios.get(baseURL);
    saveUserDetailsInLocalStorage(response.data.results[0]);
    setUserDetails(response.data.results[0]);
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // implement memoization and debounce to reduce the number of API calls
  const debouncedFetchUserDetailHandler = useMemo(
    () => _.debounce(fetchUserDetails, 300),
    []
  );

  return (
    <div className="App">
      <DisplayUserDetails
        userInfo={userDetails}
        fetchUserDetails={debouncedFetchUserDetailHandler}
      />
    </div>
  );
}

export default App;
