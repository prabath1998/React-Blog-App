import { useState } from "react";

const Home = (e) => {
  // let name = "janaka";
  const [name, setName] = useState("janaka");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("chathuranga");
    setAge(52);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={(e) => handleClickAgain("prabath", e)}>
        Click Again
      </button>
    </div>
  );
};

export default Home;
