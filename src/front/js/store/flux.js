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
          localStorage.setItem("token", data.accessToken);
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

          console.log(data);
        } catch (e) {
          console.error(`error from database -- ${e}`);
        }
      },
    },
    // getDataUser: async (email) => {
    //   let myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");

    //   let raw = JSON.stringify({
    //     email: email,
    //   });

    //   let requestOptions = {
    //     method: "GET",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //   };
    //   console.log(requestOptions);
    // try {
    //   const response = await fetch(
    //     process.env.BACKEND_URL + "/api/user",
    //     requestOptions
    //   );

    //   const data = await response.json();

    //   console.log(data);
    // } catch (e) {
    //   console.error(`error from database -- ${e}`);
    // }
    // },
  };
};

export default getState;
