import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function LogoutD() {
  // use Effect doesn't support async await so we use promises
  const history = useHistory();
  useEffect(() => {
    fetch("/LogoutD", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history.push("/LoginD", { replace: true });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h3>Logout page</h3>
    </div>
  );
}

export default LogoutD;
