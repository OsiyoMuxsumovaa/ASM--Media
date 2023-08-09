import React from "react";
import "./MainCard.css";

const MainCard = () => {
  return (
    <div className="maincard-container">
      <div className="mainTitle">
        <h1>
          Это команда профессионалов со значительным опытом в области рекламы.
        </h1>
      </div>
      <div className="mainSubTitle">
        <ul>
            <li>Большой опыт работы как с локальными, так и с международными компаниями</li>
            <li>Комплексных подход и использование интегрированных коммуникаций</li>
            <li>Специальные условия на размещение рекламы со многими ключевыми медийными площадками</li>
        </ul>
      </div>
      <div className="mainBottomTitle">
        <li>PROJECTS DONE</li> <li>200+</li>
        <li>HAPPY CLIENTS</li> <li>99%</li>
        <li>WORKING HOURS</li> <li>146,00</li>
      </div>
    </div>
  );     
};

export default MainCard;
