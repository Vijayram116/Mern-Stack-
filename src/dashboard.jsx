// filepath: /c:/Users/vijay/OneDrive/Desktop/Finance - MERN/FRONTEND/Manager/src/Dashboard.jsx
import "./dashboard.css";
import F2 from "./images/f2.jpg";
import F3 from "./images/f3.jpg";

function Dashboard() {
  return (
    <>
      <h1 className="d1">Prime Expense Traker</h1>
      <div className="container">
        <div className="ledger1">
          <h1 className="update">UPDATE</h1>
          <hr />
          <div>
            <button className="btn1">Income</button>
            <button className="btn2">Expense</button>
          </div>
          <input type="text" placeholder="Catagory " className="d3"></input>
          <input type="text" placeholder="Amount" className="d4" />
          <div>
            <button className="btn3">Add + </button>
            <button className="btn4">clear x</button>
          </div>
          <img src={F3} alt="image" className="f2" />
        </div>



        <div className="ledger2">
          <div className="div1">
            <h1 className="dh1">TOTAL BALANCE</h1>
            <h1 className="dh2">50000</h1>
          </div>
          <div className="ic">
            <div className="inc">
              <h2>Income</h2>
              <h2>500</h2>
            </div>
            <div className="exp">
              <h2>Expense</h2>
              <h2>500</h2>
            </div>
          </div>
        </div>



        <div className="transaction">
          <h3>Transaction Details</h3>
          <ul className="trans">
           <li className="inc">
              Salary
              <span>15000</span>
              <button className="btn-del">x</button>
            </li>
            <li className="exp1">
              Insurance
              <span>-1500</span>
              <button className="btn-del">x</button>
            </li>
            <li className="exp1">
              Food
              <span>-400</span>
              <button className="btn-del">x</button>
            </li>
            <li className="exp1">
              cloths
              <span>-2500</span>
              <button className="btn-del">x</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
