import React, { useState } from "react";

const ProfitCalculator = () => {
  const [fabibra, setFabibra] = useState("");
  const [ganancia, setGanancia] = useState("");
  const [dolar, setDolar] = useState("");

  const calcularValorIncluyendoIGV = () => {
    if (fabibra) {
      const valorIGV = parseFloat(fabibra) * 0.18;
      const valorTotal = parseFloat(fabibra) + valorIGV;
      return isNaN(valorTotal) ? 0 : valorTotal.toFixed(2);
    }
    return 0;
  };

  const calcularValorTotalSoles = () => {
    if (fabibra && ganancia && dolar) {
      const valorIncluyendoIGV = parseFloat(fabibra) * (1 + 0.18);
      const valorTotalSoles =
        valorIncluyendoIGV * parseFloat(dolar) + parseFloat(ganancia);
      return isNaN(valorTotalSoles) ? 0 : valorTotalSoles.toFixed(2);
    }
    return 0;
  };

  const calcularValorTotalSoles_singanacia = () => {
    if (fabibra && dolar) {
      const valorIncluyendoIGV = parseFloat(fabibra) * (1 + 0.18);
      const valorTotalSoles = valorIncluyendoIGV * parseFloat(dolar);
      return isNaN(valorTotalSoles) ? 0 : valorTotalSoles.toFixed(2);
    }
    return 0;
  };

  const calcularPorcentajeGananciaTotal = () => {
    if (fabibra && ganancia && dolar) {
      const valorIncluyendoIGV = parseFloat(fabibra) * (1 + 0.18);
      const porcentaje =
        (parseFloat(ganancia) /
          (valorIncluyendoIGV * parseFloat(dolar) + parseFloat(ganancia))) *
        100;
      return isNaN(porcentaje) ? 0 : porcentaje.toFixed(2);
    }
    return 0;
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Ganancia</h1>
      <div className="mb-4">
        <label htmlFor="fabibra" className="block mb-2">
          Valor de FABIBRA en dólares:
        </label>
        <input
          type="number"
          id="fabibra"
          value={fabibra}
          onChange={(e) => setFabibra(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ganancia" className="block mb-2">
          Ganancia en soles:
        </label>
        <input
          type="number"
          id="ganancia"
          value={ganancia}
          onChange={(e) => setGanancia(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dolar" className="block mb-2">
          Valor del dólar:
        </label>
        <input
          type="number"
          id="dolar"
          value={dolar}
          onChange={(e) => setDolar(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="porcentaje-ganancia" className="block mb-2">
          Porcentaje de Ganancia Total:
        </label>
        <p id="porcentaje-ganancia">{calcularPorcentajeGananciaTotal()}%</p>
      </div>
      <div className="mb-4">
        <label htmlFor="valor-incluyendo-igv" className="block mb-2">
          Valor incluyendo 18% IGV:
        </label>
        <p id="valor-incluyendo-igv">${calcularValorIncluyendoIGV()}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="valor-total-dolares" className="block mb-2 text-green-800 font-bold">
          Valor Total Soles:
        </label>
        <p id="valor-total-dolares" className="text-green-800 font-bold">${calcularValorTotalSoles()}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="valor-total-soles" className="block mb-2 text-orange-500 font-bold">
          Valor Total en Soles Venta:
        </label>
        <p id="valor-total-soles" className="text-orange-500 font-bold">S/{calcularValorTotalSoles_singanacia()}</p>
      </div>
     
    </div>
  );
};

export default ProfitCalculator;
