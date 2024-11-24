import { useContext, useState } from "react";
import { ContextData } from "./UserContext";
import { IoSearch } from "react-icons/io5";
import styles from "./InputCity.module.css";

const InputCity = () => {
  const { setCity } = useContext(ContextData);
  const [userInput, setUserInput] = useState("");

  const handelChange = (event) => {
    setUserInput(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    setCity(userInput);
    setUserInput("");
  };

  return (
    <div className={styles.inputcontainer}>
      <form onSubmit={handelSubmit}>
        <input
          className={styles.input}
          type="text"
          onChange={handelChange}
          placeholder="Enter City"
          value={userInput}
        />
        <button type="submit" className={styles.btn}>
          <IoSearch className={styles.icon} />
        </button>
      </form>
    </div>
  );
};

export default InputCity;
