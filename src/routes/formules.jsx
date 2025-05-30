import React, { useState } from "react";
import classes from "../styles/classes.module.scss";
import NavMenu from "./components/menu";
import InputComponent from "./components/inputComponent";

function DoWeakBlow(Power, Modificator, CubeResult1) {
  let result = CubeResult1 - 4 + Math.round(0.25 * Power) + Modificator
  return result >= 0 ? result : 0;

}
function DoStrongBlow(Power, Modificator, CubeResult1) {
  let result = CubeResult1 + Math.round(0.5 * Power) + Modificator;
  return result >= 0 ? result : 0;
}
function DoKick(Power, Modificator, CubeResult1, CubeResult2) {
  let result =  Math.floor((CubeResult1 + CubeResult2) / 2) + Math.round(0.125 * Power) + Modificator;
  return result >= 0 ? result : 0;
}
function DoPush(Modificator, CubeResult1) {
  let result = CubeResult1 - 2 + Modificator;
  return result >= 0 ? result : 0;
}

function Formules() {
  const [Power, setPower] = useState(0);
  const [Modificator, setModificator] = useState(0);
  const [CubeResult1, setCubeResult1] = useState(0);
  const [CubeResult2, setCubeResult2] = useState(0);
  const [TypeAttack, setTypeAttack] = useState("DoWeakBlow"); 

  const attackFunctions = {
    DoWeakBlow,
    DoStrongBlow,
    DoKick,
    DoPush,
  };

  function ResultDamage(typeAttack) {
    const attackFunction = attackFunctions[typeAttack];
    if (attackFunction) {
      const result = attackFunction(Number(Power), Number(Modificator), Number(CubeResult1), Number(CubeResult2));
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
        <InputComponent value={Power} name="power" rusName="Сила" setValue={setPower} />
        <InputComponent value={Modificator} name="modificator" rusName="Модификатор" setValue={setModificator} />
        <InputComponent value={CubeResult1} name="cuberesult1" rusName="Результат кубика" setValue={setCubeResult1} />
          {TypeAttack === "DoKick" ? 
            <InputComponent value={CubeResult2} name="cuberesult2" rusName="Результат кубика" setValue={setCubeResult2} />
          : ""}
        <select value={TypeAttack} onChange={event => setTypeAttack(event.target.value)}>
          <option value="DoWeakBlow">Слабый удар</option>
          <option value="DoStrongBlow">Сильный удар</option>
          <option value="DoKick">Удар ногой</option>
          <option value="DoPush">Пинок</option>
        </select> 
        {ResultDamage(TypeAttack)} 
        <button className={classes.button} onClick={() => {
          setModificator(0)
          setCubeResult1(0)
          setCubeResult2(0)
          setPower(0)
        }}>Сбросить</button>
        <button className={classes.button} onClick={() =>{
          let number = Math.floor(Math.random() * 6) + 1;
          let number2 = Math.floor(Math.random() * 6) + 1;
          setCubeResult1(number);
          setCubeResult2(number2);
          console.log(number, number2)
        }}>Бросить кубики</button>
      </main>
      </details>

    </>
  );
}

export default Formules;