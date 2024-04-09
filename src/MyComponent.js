import React from "react";
import { useSelector } from "react-redux";

const MyComponent = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div>
      <h1>Hello, {username}!</h1>
    </div>
  );
};

export default MyComponent;
