import Formulario from "./components/Formulario";
import imagenCriptos from "./img/imagen-criptos.png";

function App() {
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
          <Formulario />
        </div>
      </div>
    </>
  );
}

export default App;
