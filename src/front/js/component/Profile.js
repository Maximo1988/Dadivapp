import React from "react";

export const Profile = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-8 col-md-6 col-xl-4">
        <div class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            {props.firstName} {props.lastName}
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            A second item
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            A third button item
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            A fourth button item
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            disabled
          >
            A disabled button item
          </button>
        </div>
      </div>
    </div>
  );
};
