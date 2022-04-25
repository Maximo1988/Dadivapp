import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Profile = (props) => {
  return (
    <div className="row justify-content-center">
      <form>
        <div className="form-group row">
          <label
            /* forhtml="staticEmail" */ className="col-sm-2 col-form-label"
          >
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              id="staticEmail"
              disabled={true}
              value="ariel@ariel"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
