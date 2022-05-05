import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { resolveConfig } from "prettier";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      dataUser: [],
      token: "",
      signupOK: "",
      dataDonaciones: [],
    },
    actions: {
      signup: async (
        email,
        pass,
        firstName,
        lastName,
        address,
        phone,
        document,
        country,
        role,
        paypalLink
      ) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          email: email,
          password: pass,
          first_name: firstName,
          last_name: lastName,
          address: address,
          phone: phone,
          document: document,
          country: country,
          role: role,
          paypal_link: paypalLink,
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
          if (data?.message) {
            setStore({ signupOK: data.message });
          }

          console.log(data);
        } catch (e) {
          console.error(`error from database -- ${e}`);
        }
      },
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

          localStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
        } catch (e) {
          console.error(`error from database -- ${e}`);
        }
      },

      getDonations: async () => {
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
            process.env.BACKEND_URL + "/donaciones",
            requestOptions
          );

          const data = await response.json();
          setStore({ dataDonaciones: data });
          console.log(data);
        } catch (e) {
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
