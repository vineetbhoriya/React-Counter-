import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function handlerIncrement() {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(10);
    }
  }
  function handlerDecrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }
  function handlerRest(){
    setCount(0)
  }
  return (
    <>
      <div>

        <h1 className="text-white text-xl md:text-7xl my-5">Welcome </h1>
        <h1 className="text-white text-xl md:text-7xl my-5">From 0 to 10</h1>
        <div className="flex space-y-10 flex-col items-center border w-full  content-center p-3 md:p-[8rem]  mt-[5rem] justify-center">
          <h1 className="text-white text-2xl md:text-7xl mx-5  w-full">{count}</h1>
          <div className="flex items-center justify-center space-x-5  w-full">
            <button
              onClick={handlerIncrement}
              className="md:text-5xl py-3 px-7 text-xl  md:p-5  md:w-20 bg-blue-500 rounded-xl hover:scale-95"
            >+</button>
            <button
              onClick={handlerDecrement}
              className="md:text-5xl py-3 px-7 text-xl  md:p-5  md:w-20 bg-blue-500 rounded-xl hover:scale-95"
            >-</button>
            <button
              onClick={handlerRest}
              className="md:text-5xl py-3 px-2 text-xl   md:p-5 bg-green-500 rounded-xl hover:scale-95"
            >Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
