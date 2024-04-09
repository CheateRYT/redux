import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "./reducers/userReducer"; // Обновленный импорт

const MyComponent = () => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    dispatch(setUsername(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h1>Hello, {username}!</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Change Username</button>
    </div>
  );
};

export default MyComponent;
