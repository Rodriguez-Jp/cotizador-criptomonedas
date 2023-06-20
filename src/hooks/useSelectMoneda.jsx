import { useState } from "react";
import monedas from "../monedas";

const useSelectMoneda = (label = "Elige tu moneda") => {
  const [state, setState] = useState("");
  const selectMonedas = () => (
    <>
      <div className="flex flex-col mt-5 text-3xl">
        <label>{label}</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="text-black text-xl p-3 rounded-lg mt-5"
        >
          <option value="">Seleccione</option>
          {monedas.map((moneda) => (
            <option key={moneda.id} value={moneda.id}>
              {moneda.nombre}
            </option>
          ))}
        </select>
      </div>
    </>
  );
  return [state, selectMonedas];
};

export default useSelectMoneda;
