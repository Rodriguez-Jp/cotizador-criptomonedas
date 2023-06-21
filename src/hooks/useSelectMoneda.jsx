import { useState } from "react";
import { generarRandomKey } from "../helpers/helpers";

const useSelectMoneda = (label = "Elige tu moneda", opciones = []) => {
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
          {opciones.map((opcion) => (
            <option key={generarRandomKey()} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </select>
      </div>
    </>
  );
  return [state, selectMonedas];
};

export default useSelectMoneda;
