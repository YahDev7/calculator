import React, { useState } from "react";

const ProfitCalculator = () => {
  const [fabibra, setFabibra] = useState("");
  const [ganancia, setGanancia] = useState("");
  const [dolar, setDolar] = useState("");
  const [formateo, setformateo] = useState("");
  const [pasaje, setpasaje] = useState("");

  const calcularValorIncluyendoIGV = () => {
    if (fabibra) {
      const valorIGV = parseFloat(fabibra) * 0.18;
      const valorTotal = parseFloat(fabibra) + valorIGV;
      return isNaN(valorTotal) ? 0 : valorTotal.toFixed(2);
    }
    return 0;
  };

  const calcularValorTotalSoles = () => {
    if (fabibra && ganancia && dolar && formateo && pasaje) {
      const valorIncluyendoIGV = parseFloat(fabibra) * (1 + 0.18);
      const valorTotalSoles = valorIncluyendoIGV * parseFloat(dolar) + parseFloat(ganancia) + parseFloat(formateo) + parseFloat(pasaje);
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
    if (ganancia && dolar) {
      const valorIncluyendoIGV = parseFloat(fabibra) * (1 + 0.18);
      const valorTotalSoles = valorIncluyendoIGV * parseFloat(dolar);
      let por = (parseFloat(ganancia) / valorTotalSoles) * 100
      return por.toFixed(2)
    }

    return 0;


    /*   if (fabibra && ganancia && dolar) {
        const valorIncluyendoIGV = parseFloat(fabibra) * (1 + 0.18);
        const valorTotalSoles = valorIncluyendoIGV * parseFloat(dolar);
        const gananciaTotal = valorTotalSoles + parseFloat(ganancia);
        const porcentajeGanancia = (parseFloat(ganancia) / gananciaTotal) * 100;
        return isNaN(porcentajeGanancia) ? 0 : porcentajeGanancia.toFixed(2);
      }
      return 0; */
  };



  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">CALCULADORA</h1>

      <div className="grid grid-cols-3 gap-3">
        <div className="mb-4">
          <label htmlFor="fabibra" className="font-bold block mb-2">
            VALOR DOLARES:
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
          <label htmlFor="dolar" className="font-bold block mb-2">
            DOLAR:
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
        <label htmlFor="ganancia" className="font-bold block mb-2">
          COSTOS ADMIN:
        </label>
        <input
          type="number"
          id="ganancia"
          value={ganancia}
          onChange={(e) => setGanancia(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      </div>

      
      <div className="grid grid-cols-2 gap-3">

      <div className="mb-4">
        <label htmlFor="FORMATEO" className=" block mb-2">
          FORMATEO:
        </label>
        <input
          type="number"
          id="formateo"
          value={formateo}
          onChange={(e) => setformateo(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      

      <div className="mb-4">
        <label htmlFor="PASAJES" className=" block mb-2">
          PASAJES:
        </label>
        <input
          type="number"
          id="pasaje"
          value={pasaje}
          onChange={(e) => setpasaje(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>
      </div>

      <div className="grid grid-cols-2 gap-3">


      <div className="mb-4">
        <label htmlFor="porcentaje-ganancia" className=" block mb-2">
          Porcentaje de costos admin Total:
        </label>
        <p id="porcentaje-ganancia">{calcularPorcentajeGananciaTotal()}%</p>
      </div>
      <div className="mb-4">
        <label htmlFor="valor-incluyendo-igv" className=" block mb-2">
          Valor Dolar incluyendo 18% IGV:
        </label>
        <p className="font-bold" id="valor-incluyendo-igv">${calcularValorIncluyendoIGV()}</p>
      </div>
      </div>

      <div className="grid grid-cols-2 gap-3">


      <div className="mb-4">
        <label htmlFor="valor-total-soles" className="block mb-2 text-orange-500 font-bold">
          Valor  en Soles :
        </label>
        <p id="valor-total-soles" className="text-orange-500 font-bold">S/{calcularValorTotalSoles_singanacia()}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="valor-total-soles" className="block mb-2 text-green-800 font-bold">
          Valor Total Soles :
        </label>
        <p id="valor-total-soles" className="text-green-800 font-bold">S/{calcularValorTotalSoles()}</p>
      </div>
      </div>

    </div>
  );
};

export default ProfitCalculator;