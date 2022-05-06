import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      dataUser: [],
      token: "",
      projects_all: [],
      Projects_benef: [],
      Projects_create: []
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
            process.env.BACKEND_URL + "/api/login",
            requestOptions
          );

          const data = await response.json();

          console.log(data);
          localStorage.setItem("token", data.access_token);
          // Swal.fire("Login OK", "Click the button", "success");
          setStore({ token: data.access_token });
        } catch (e) {
          // Swal.fire(e.msg, "Click the button", "error");
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
      Projects_all: async () => {
        const token = localStorage.getItem("token") || "";
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let requestOptions = {
          method: "GET",
          headers: myHeaders,
        };

        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/proyectos_all",
            requestOptions
          );

          const data = await response.json()
          setStore({ projects_all: data })

          console.log(data)
        } catch (e) {
          console.error(`error from database -- ${e}`)
        }
      },

      Projects_benef: async () => {
        const token = localStorage.getItem("token") || "";
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let requestOptions = {
          method: "GET",
          headers: myHeaders
        };

        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/projects",
            requestOptions
          );

          const data = await response.json()
          setStore({ Projects_benef: data })

          console.log(data)
        } catch (e) {
          console.error(`error from database -- ${e}`)
        }
      },

      Projects_create: async (name, date_finish, description, donative_amount) => {
        const token = localStorage.getItem("token") || "";
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let raw = JSON.stringify({
          name: name,
          date_finish: date_finish,
          description: description,
          donative_amount: donative_amount
        });

        let requestOptions = {
          method: "POST",
          body: raw,
          headers: myHeaders
        };

        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/projects",
            requestOptions
          );

          const data = await response.json()
          setStore({ Projects_create: data })

          console.log(data)
        } catch (e) {
          console.error(`error from database -- ${e}`)
        }
      }
    },

    removeToken: () => {
      localStorage.removeItem("token");
    },
  };
};

export default getState;
