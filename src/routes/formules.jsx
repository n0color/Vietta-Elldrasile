import React, { useState } from "react";
import classes from "../styles/classes.module.scss";
import NavMenu from "./components/menu";

function DoWeakBlow(Power, Modificator, CubeResult) {
  let result = CubeResult - 4 + Math.round(0.25 * Power) + Modificator
  return result >= 0 ? result : 0;

}
function DoStrongBlow(Power, Modificator, CubeResult) {
  let result = CubeResult + Math.round(0.5 * Power) + Modificator;
  return result >= 0 ? result : 0;
}
function DoKick(Power, Modificator, CubeResult) {
  let result =  2 * CubeResult + Math.round(0.125 * Power) + Modificator;
  return result >= 0 ? result : 0;
}
function DoPush(Modificator, CubeResult) {
  let result = CubeResult - 2 + Modificator;
  return result >= 0 ? result : 0;
}

function Formules() {
  const [Power, setPower] = useState(0);
  const [Modificator, setModificator] = useState(0);
  const [CubeResult, setCubeResult] = useState(0);
  const [TypeAttack, setTypeAttack] = useState("DoWeakBlow"); 

  const attackFunctions = {
    DoWeakBlow,
    DoStrongBlow,
    DoKick,
    DoPush,
  };

  function onClickButtonResult(typeAttack) {
    const attackFunction = attackFunctions[typeAttack];
    if (attackFunction) {
      const result = attackFunction(Number(Power), Number(Modificator), Number(CubeResult));
      return <p>Ваш урон составил: {result}</p>;
    } else {
      console.error(`Функция ${typeAttack} не найдена.`);
      return <p className={classes.content}>Ошибка: функция не найдена.</p>;
    }
  }

  return (
    <>
      <NavMenu />
      <details>
        <summary className={classes.header}>Ближний бой</summary>
      <main className={classes.content}>
        <input type="number" value={Power} name="PowerInput" onChange={event => setPower(event.target.value)} />
        <label htmlFor="PowerInput">Ваша сила</label>
        <input type="number" value={Modificator} name="ModificatorInput" onChange={event => setModificator(event.target.value)} />
        <label htmlFor="ModificatorInput">Ваш модификатор</label>
        <input type="number" value={CubeResult} name="CubeInput" onChange={event => setCubeResult(event.target.value)} />
        <label htmlFor="CubeInput">Результат кубика</label>
        <select value={TypeAttack} onChange={event => setTypeAttack(event.target.value)}>
          <option value="DoWeakBlow">Слабый удар</option>
          <option value="DoStrongBlow">Сильный удар</option>
          <option value="DoKick">Удар ногой</option>
          <option value="DoPush">Пинок</option>
        </select> 
        {onClickButtonResult(TypeAttack)} 
        <button className={classes.button} onClick={() => {
          setModificator(0)
          setCubeResult(0)
          setPower(0)
        }}>Сбросить</button>
      </main>
      </details>

    </>
  );
}

export default Formules;