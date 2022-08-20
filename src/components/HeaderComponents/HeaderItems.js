import React from "react";

const HeaderItems = ({href , src}) => {
  return (
    <div>
        <a
            rel="noreferrer"
            href={href}
            target="_blank"
        >
            <img alt="logo" src={src} />
        </a>
    </div>
  );
};

export default HeaderItems;
