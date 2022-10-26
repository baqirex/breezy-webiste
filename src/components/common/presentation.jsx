import React from "react";

const Presentation = ({ title, color, heading, description, image }) => {
  return (
    <div class="container col-xxl-8 px-2 py-2">
      <div class="row flex-lg align-items-center g-5 py-5">
        <div class="col-lg-6">
          <h1 className="p-title" style={(color = { color })}>
            {title}
          </h1>
          <h1 class="display-5 fw-bold lh-1 mb-3">{heading}</h1>
          <p class="lead">{description}</p>
        </div>
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={image}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
