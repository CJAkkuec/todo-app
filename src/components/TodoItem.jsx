import { useState } from "react";

export const TodoItem = ({ name }) => {
  const [isChecked, setIsActive] = useState(false);

  return (
    <li
      className={isChecked ? "checked" : ""}
      onClick={() => {
        setIsActive(!isChecked);
      }}
    >
      {name}
    </li>
  );
};
