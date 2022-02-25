import { useEffect, useRef, useState } from "react";
import Status from "./components/Status";
import luckyNumber from "./luckyNumber";
import web3 from "./web3";

function App() {
  // console.log("Version: ", web3.version);
  // console.log("Accounts: ", luckyNumber.methods.manager().call());

  const [manager, setManager] = useState("");
  const [number, setNumber] = useState("");

  const addressRef = useRef()

  useEffect(() => {
    luckyNumber.methods
      .manager()
      .call()
      .then((manager) => setManager(manager));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const number = await luckyNumber.methods.luckyNumbers(addressRef.current.value).call();
    setNumber(number);
  }

  return (
    <>
      <h1>Lucky Number</h1>
      <h3>Manager: {manager}</h3>
      <Status manager = {manager} />
      <hr/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Address:</label>
        <input ref={addressRef} type="text" name="address" placeholder="Enter address to see lucky numder"/>
        <input type="submit" value="Go!"/>
      </form>
      <h3>Lucky Number of this address: {number}</h3>
    </>
  );
}

export default App;
