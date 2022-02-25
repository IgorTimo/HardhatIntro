import { useEffect, useState } from "react";
import luckyNumber from "../luckyNumber";
import web3 from "../web3";

const Status = (props) => {
  const [newStatus, setNewStatus] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");



  window.ethereum.on('accountsChanged',  (accounts) => {
    console.log("accounts: ", accounts);
    setCurrentAccount(accounts[0]);
  })

  useEffect(() => {
    web3.eth.getAccounts().then(accounts => setCurrentAccount(accounts[0]));
    luckyNumber.methods.status().call().then(setStatus);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("Wait a few moment...");

    const accounts = await web3.eth.getAccounts();
    try {
      await luckyNumber.methods.setStatus(newStatus).send({
        from: accounts[0],
      });
      setMessage("Success");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <h3>Status of this contract: {status}</h3>
      { props.manager.toUpperCase() === currentAccount.toUpperCase() &&
      <form onSubmit={handleSubmit}>
        <label htmlFor="status">New status:</label>
        <input
          type="text"
          name="status"
          value={newStatus}
          onChange={(event) => setNewStatus(event.target.value)}
        />
        <input type="submit" />
        {/* <button type="button">Just a button</button> */}
        <span style={{color: "red"}}>{message}</span>
      </form>
    }
    </>
  );
};

export default Status;
