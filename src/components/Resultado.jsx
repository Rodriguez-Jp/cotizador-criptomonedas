const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    resultado;
  return (
    <>
      <div className="flex">
        <div className="w-[30%]">
          <img
            src={`https://www.cryptocompare.com${IMAGEURL}`}
            alt="CriptoCurrency Logo"
          />
        </div>
        <div className="text-white text-xl">
          <p className="mb-2 font-normal">
            Precio Actual: <span className="font-semibold">{PRICE}</span>
          </p>
          <p className="mb-1 font-normal">
            Precio mas alto del dia:{" "}
            <span className="font-semibold">{HIGHDAY}</span>
          </p>
          <p className="mb-1 font-normal">
            Precio mas bajo del dia:{" "}
            <span className="font-semibold">{LOWDAY}</span>
          </p>
          <p className="mb-1 font-normal">
            Variacion ultimas 24 horas (%):{" "}
            <span className="font-semibold">{CHANGEPCT24HOUR}</span>
          </p>
          <p className="mb-1 font-normal">
            Ultima actualizacion:{" "}
            <span className="font-semibold">{LASTUPDATE}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Resultado;
