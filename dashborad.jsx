import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import F2 from "./images/f2.jpg";
import F3 from "./images/f3.jpg";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  useEffect(() => {
    axios.get("http://localhost:5000/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addTransaction = () => {
    axios.post("http://localhost:5000/add-transaction", { category, amount, type })
      .then((res) => {
        setTransactions([...transactions, res.data]);
        setCategory("");
        setAmount("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="d1">Prime Expense Tracker</h1>
      <div className="container">
        <div className="ledger1">
          <h1 className="update">UPDATE</h1>
          <hr />
          <div>
            <button className="btn1" onClick={() => setType("income")}>Income</button>
            <button className="btn2" onClick={() => setType("expense")}>Expense</button>
          </div>
          <input
            type="text"
            placeholder="Category"
            className="d3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            className="d4"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div>
            <button className="btn3" onClick={addTransaction}>Add +</button>
            <button className="btn4" onClick={() => { setCategory(""); setAmount(""); }}>Clear x</button>
          </div>
          <img src={F3} alt="image" className="f2" />
        </div>

        <div className="ledger2">
          <div className="div1">
            <h1 className="dh1">TOTAL BALANCE</h1>
            <h1 className="dh2">
              {transactions.reduce((acc, t) => t.type === "income" ? acc + Number(t.amount) : acc - Number(t.amount), 0)}
            </h1>
          </div>
          <div className="ic">
            <div className="inc">
              <h2>Income</h2>
              <h2>{transactions.filter(t => t.type === "income").reduce((acc, t) => acc + Number(t.amount), 0)}</h2>
            </div>
            <div className="exp">
              <h2>Expense</h2>
              <h2>{transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + Number(t.amount), 0)}</h2>
            </div>
          </div>
        </div>

        <div className="transaction">
          <h3>Transaction Details</h3>
          <ul className="trans">
            {transactions.map((t, index) => (
              <li key={index} className={t.type === "income" ? "inc" : "exp1"}>
                {t.category}
                <span>{t.type === "income" ? `+${t.amount}` : `-${t.amount}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
