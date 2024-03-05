import React from "react";

const defaultProfileImage =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

const Image = (props) => {
  return (
    <img
      src={props.src || defaultProfileImage}
      alt={props.alt}
      className="rounded-full w-24 h-24 object-cover mx-auto"
    />
  );
};

export default Image;
