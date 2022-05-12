import React, { useContext, useEffect } from "react";
import { Profile_Form } from "../component/Profile_Form";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getDataUser(store.token);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <img
          height="200px"
          sizes="contain"
          src="https://i.picsum.photos/id/202/2000/300.jpg?hmac=XOeg5tys5i8zxP_yEtuCCP7h6Fvy4cGWhm8KfoB7pcE"
          alt="..."
        />
      </div>
      <div className="container">
        <Profile_Form />
      </div>
    </div>
  );
};
