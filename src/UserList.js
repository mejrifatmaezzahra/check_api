import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function UserList() {
  const api = "https://jsonplaceholder.typicode.com/users";
  const [listOfUSer, setListOfUSer] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get(api)
      .then((res) => setListOfUSer(res.data))
      .catch((err) => err);
  }, []);

  return (
    <div>
      <div id="mar" className="container">
        <div>
          <h1 class="text-center"> NPI USERLIST </h1>

          <select
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          >
            <option> Please Select </option>
            {listOfUSer.map((listOfUSer) => (
              <option>{listOfUSer.name} </option>
            ))}
          </select>
        </div>
        <div id="mar" class="card text-center">
          {listOfUSer
            .filter((listOfUSer) => listOfUSer.name === name)
            .map((listOfUSer) => (
              <>
                <h1 class="card-header">{listOfUSer.name} </h1>
                <div class="card-body">
                  <h4 class="card-text">email : {listOfUSer.email} </h4>
                  <p> Phone : {listOfUSer.phone}</p>
                  <h3> {listOfUSer.username} </h3>
                </div>
                <h2 class="card-footer text-muted">
                  Web site :
                  <a  target="_blank" href={listOfUSer.website}> https//{listOfUSer.website} </a>
                </h2>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;