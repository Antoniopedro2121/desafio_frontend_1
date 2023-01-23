const RespostaCalculo = ({ chave, valor }) => {
  if (chave === "1") {
    return (
      <li>
        <p className="resposta">
          Amanhã: <span>R$ {valor}</span>
        </p>
      </li>
    );
  } else {
    return (
      <li>
        <p className="resposta">
          Em {chave} dias: <span>{valor}</span>
        </p>
      </li>
    );
  }
};

export default RespostaCalculo;
