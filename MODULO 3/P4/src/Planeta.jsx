import { useEffect } from "react";

function Planeta({ nombre }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`);

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`);
    };
  }, [nombre]);

  return (
    <div className="planeta">
      <span>🪐</span>

      <div>
        <h3>{nombre}</h3>
        <p>Exploración completada</p>
      </div>
    </div>
  );
}

export default Planeta;