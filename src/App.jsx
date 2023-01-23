import "../src/global/main.css";

import { useEffect } from "react";
import { useState } from "react";

import RespostaCalculo from "./components/respostaCalculo/respostaCalculo";

function App() {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    if (amount && installments && mdr) {
      const url = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app";
      let data = {
        amount: 15000,
        installments: 4,
        mdr: 4,
      };
      const init = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          installments: installments,
          mdr: mdr,
        }),
      };

      fetch(url, init)
        .then((response) => response.json())
        .then((response) => {
          const array = [];
          for (let key in response) {
            array.push(<RespostaCalculo chave={key} valor={response[key]} />);
          }
          setData(array);
        })
        .catch((err) => console.log(err));
    }
  }, [amount, installments, mdr]);

  return (
    <>
      <main>
        <h1>Simule sua antecipação</h1>
        <div>
          <form>
            <label for="amount">Informe o valor da venda *</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => {
                if (e.target.value >= 0) {
                  setAmount(e.target.value);
                }
              }}
            />
            <label for="installments">Em quantas parcelas *</label>
            <input
              type="number"
              id="installments"
              value={installments}
              onChange={(e) => {
                if (e.target.value >= 0 && e.target.value <= 12) {
                  setInstallments(e.target.value);
                }
              }}
            />
            <label for="mdr">Informe o percentual de MDR *</label>
            <input
              type="number"
              id="mdr"
              value={mdr}
              onChange={(e) => {
                if (e.target.value >= 0) {
                  setMdr(e.target.value);
                }
              }}
            />
          </form>

          <ul>
            <h2>VOCÊ RECEBERÀ:</h2>
            {data}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
