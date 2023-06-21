const Alerta = ({ alerta }) => {
  return (
    <>
      <div className="w-full bg-red-600 p-3 rounded-lg text-2xl font-bold text-white text-center">
        <p>{alerta.msg}</p>
      </div>
    </>
  );
};

export default Alerta;
