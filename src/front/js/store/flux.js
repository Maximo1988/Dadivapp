import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      dataUser: [],
    },
    actions: {
      login: async (email, password) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          email: email,
          password: password,
        });

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/user",
            requestOptions
          );

          const data = await response.json();

          console.log(data);
          localStorage.setItem("token", data.access_token);
          Swal.fire("Login OK", "Click the button", "success");
          <Redirect push to="/" />;
        } catch (e) {
          Swal.fire(e.msg, "Click the button", "error");
          console.error(`error from database -- ${e}`);
        }
      },

      getDataUser: async () => {
        const token = localStorage.getItem("token") || "";
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/user",
            requestOptions
          );

          const data = await response.json();

          setStore({ dataUser: data });
          console.log(data);
        } catch (e) {
          removeToken();
          Swal.fire(e.msg, "Click the button", "error");
          console.error(`error from database -- ${e}`);
        }
      },
    },

    removeToken: () => {
      localStorage.removeItem("token");
    },
  };
};

export default getState;
