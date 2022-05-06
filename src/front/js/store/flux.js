import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      dataUser: [],
      token: "",
      projects_all: [],
      Projects_benef: [],
      Projects_create: [],
      signupOK: "",
      dataDonaciones: [],
      postDonaciones: [],
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
          } else {
            setStore({ signupOK: "" });
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
            process.env.BACKEND_URL + "/api/donaciones",
            requestOptions
          );

          const data = await response.json();
          setStore({ dataDonaciones: data });
          console.log(data);
        } catch (e) {
          console.error(`error from database -- ${e}`);
        }
      },

      postDonations: async (id_project, amount_donated) => {
        const token = localStorage.getItem("token") || "";
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let raw = JSON.stringify({
          id_projects: id_project,
          amount_donated: amount_donated,
        });

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        console.log(raw);
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/donaciones",
            requestOptions
          );

          const data = await response.json();

          setStore({ postDonaciones: data });
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
