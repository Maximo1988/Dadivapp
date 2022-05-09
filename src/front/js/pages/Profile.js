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
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <img
            src="https://i.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ"
            className="rounded card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div className="container">
        <Profile_Form />
      </div>
    </div>
  );
};
