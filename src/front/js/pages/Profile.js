import React, {useContext,useEffect} from "react";
import { Profile_Form } from "../component/Profile_Form";
import { Context } from "../store/appContext";

export const Profile = () => {
const { store, actions } = useContext(Context);
useEffect(() => {
    actions.getDataUser(store.token);
  }, []);

  return (
    <div className="container">
      <img
        src="https://i.picsum.photos/id/186/1000/200.jpg?hmac=pUloMIHoVy5yEh3svncyKFFHH1NW97CSBFGuAO3lQ1Q"
        className="card-img-top"
        alt="..."
      />
      <div className="container  ">
        <Profile_Form />
      </div>
    </div>
  );
};
