import React from "react";
import { CardContainer } from "./cardContainer";

import { NewProject } from "./NewProject";

export const Projects = () => {
  return (

    <div className="container row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 my-3  ">
      <CardContainer notButtonDonate={true} />
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 my-3  ">
      <CardContainer notButtonDonate={true} />
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 my-3  ">
      <CardContainer notButtonDonate={true} />
      </div>
     
    </div>
  );
};
