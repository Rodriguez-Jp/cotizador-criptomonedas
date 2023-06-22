import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import imagenCriptos from "./img/imagen-criptos.png";

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const resultadoApi = async () => {
      if (!monedas.criptoState) return;

      setCargando(true);

      const { criptoState, monedaState } = monedas;
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoState}&tsyms=${monedaState}&api_key=${API_KEY}`;

      try {
        const urlQuery = await fetch(API_URL);
        const resultado = await urlQuery.json();
        setResultado(resultado.DISPLAY[criptoState][monedaState]);
        setCargando(false);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };

    resultadoApi();
  }, [monedas]);

  return (
    <>
      <div className="md:grid md:grid-cols-2 max-w-6xl mx-auto mt-20">
        <div>
          <img
            src={imagenCriptos}
            alt="imagen criptomonedas"
            className="md:h-3/4 h-2/4 md:max-w-full max-w-[80%] mx-auto"
          />
        </div>
        <div>
          <h1 className="text-center font-bold text-4xl text-white after:content-[' '] after:w-[100px] after:h-2 after:bg-[#66A2FE] after:block after:mx-auto after:my-3">
            Cotizador de criptomonedas al instante
          </h1>
          <Formulario setMonedas={setMonedas} />

          {cargando && <Spinner />}

          {resultado.PRICE && !cargando && <Resultado resultado={resultado} />}
        </div>
      </div>
    </>
  );
}

export default App;
