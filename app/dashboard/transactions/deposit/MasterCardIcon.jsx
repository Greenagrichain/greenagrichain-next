import React from "react";

function Icon({ size = 72, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      x="0"
      y="0"
      viewBox="0 0 48 48"
      className={className}
    >
      <path
        fill="#3F51B5"
        d="M45 35a4 4 0 01-4 4H7a4 4 0 01-4-4V13a4 4 0 014-4h34a4 4 0 014 4v22z"
      ></path>
      <path fill="#FFC107" d="M30 14a10 10 0 100 20 10 10 0 100-20z"></path>
      <path
        fill="#FF3D00"
        d="M22.014 30a9.983 9.983 0 01-1.176-2h5.325a9.9 9.9 0 00.637-2h-6.598A9.976 9.976 0 0120 24h7c0-.686-.07-1.354-.201-2h-6.598a9.964 9.964 0 01.637-2h5.325a9.936 9.936 0 00-1.176-2h-2.973c.437-.58.93-1.122 1.481-1.595A9.955 9.955 0 0017 14c-5.523 0-10 4.477-10 10s4.477 10 10 10c3.269 0 6.162-1.575 7.986-4h-2.972z"
      ></path>
    </svg>
  );
}

export default Icon;
