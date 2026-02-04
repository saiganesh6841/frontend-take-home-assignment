const APIRequest = {
  request: function (method, url, body) {
    let config = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authToken: localStorage.getItem("token"),
        "Accept-Language":
          JSON.parse(localStorage.getItem("lng")) !== undefined &&
          JSON.parse(localStorage.getItem("lng")) !== null
            ? JSON.parse(localStorage.getItem("lng")).code
            : "",
      },
      //   credentials: "include", // Include cookies in the request
    };

    if (body !== "") {
      config.body = body;
    }

    return fetch(url, config)
      .then((response) => {
        // Handle session token refresh
        response.headers.forEach((val, key) => {
          if (
            key === "reconnection" &&
            val === "true" &&
            sessionStorage.getItem("payhub.session")
          ) {
            sessionStorage.setItem(
              "payhub.session",
              response.headers.get("user-token"),
            );
          }
        });

        return response.json();
      })
      .then((data) => {
        return this.returnResponse(data, url, config); // Handle the response
      })
      .catch(() => {
        return { returncode: 0, errors: [{ errormsg: "Timeout Error." }] };
      });
  },
};

export default APIRequest;
