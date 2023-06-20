import useSelectMoneda from "../hooks/useSelectMoneda";

const Formulario = () => {
  const [SelectMoneda] = useSelectMoneda("Elige tu moneda");
  const [SelectCriptoMoneda] = useSelectMoneda("Elige tu CriptoMoneda");

  return (
    <form className="w-full text-white flex flex-col p-5 text-2xl font-bold">
      <SelectMoneda />
      <SelectCriptoMoneda />
      <input
        type="submit"
        value="Calcular"
        className="bg-violet-400 p-2 mt-10 rounded-lg hover:bg-violet-500 transition-colors duration-200 cursor-pointer"
      />
    </form>
  );
};

export default Formulario;
