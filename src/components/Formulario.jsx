import { useState, useEffect } from "react";
import useSelectMoneda from "../hooks/useSelectMoneda";
import monedas from "../monedas";
import Alerta from "./Alerta";

const API_KEY = import.meta.env.VITE_API_KEY;

const Formulario = () => {
  const [cripto, setCripto] = useState([]);
  const [state, SelectMoneda] = useSelectMoneda("Elige tu moneda", monedas);
  const [criptoState, SelectCriptoMoneda] = useSelectMoneda(
    "Elige tu CriptoMoneda",
    cripto
  );
  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state, criptoState);

    //Validacion formulario

    if (state === "" || criptoState === "") {
      setAlerta({ msg: "Por favor rellene todos los campos", error: true });
      return;
    }

    setAlerta({});

    console.log("lleno");
  };

  useEffect(() => {
    const API_URL = `${import.meta.env.VITE_API_URL}&api_key=${API_KEY}`;

    const fetchData = async () => {
      const fetchQuery = await fetch(API_URL);
      const response = await fetchQuery.json();

      const criptoArray = response.Data.map((moneda) => {
        const { Name, FullName } = moneda.CoinInfo;
        return { id: Name, nombre: FullName };
      });

      setCripto(criptoArray);
    };

    fetchData();
  }, []);

  const { msg } = alerta;
  return (
    <>
      <form
        className="w-full text-white flex flex-col p-5 text-2xl font-bold"
        onSubmit={handleSubmit}
      >
        <SelectMoneda />
        <SelectCriptoMoneda />
        <input
          type="submit"
          value="Calcular"
          className="bg-violet-400 p-2 mt-10 rounded-lg hover:bg-violet-500 transition-colors duration-200 cursor-pointer"
        />
      </form>
      <div className="p-5">{msg && <Alerta alerta={alerta} />}</div>
    </>
  );
};

export default Formulario;
