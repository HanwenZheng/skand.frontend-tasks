import React from "react";
import axios from "axios";

function App() {
  const proxy = "/api/v2";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email: "test@skand.io", password: "password" });

  const getData = async () => {
    const res = await axios.post(proxy + "/users/tokens", body, config);
    return res;
  };

  try {
    getData().then((data) => {
      console.log(data);
    });
  } catch (err) {
    console.error(err.message);
  }

  return <div className="App">ok</div>;
}

export default App;
