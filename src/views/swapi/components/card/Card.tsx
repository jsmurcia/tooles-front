import { useState } from "react";
import { Person } from "views/swapi";
import "./Card.scss";

interface CardProps {
  person: Person;
}

interface Image {
  [key: number]: string;
}

export const IMAGES: Image = {
  172: "img/Luke Skywalker.JPG",
  167: "img/C-3PO.jpg",
  96: "img/R2-D2.jpg",
  202: "img/Darth Vader.png",
  150: "img/Leia Organa.png",
  178: "img/owen.PNG",
  165: "img/beru.PNG",
  97: "img/r5-d4.PNG",
  183: "img/biggs.PNG",
  182: "img/obiWant.PNG",
};

export const Card = ({ person }: CardProps) => {
  const { height } = person;
  const imageKey = parseInt(height, 10);

  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className={seeMore ? "card__extend" : "card"}>
      <img alt={person.name} src={IMAGES[imageKey]} className="card__img" />
      <div className="card__container">
        <h3 className="card__title">{person.name}</h3>
        <p>
          <span className="font-semibold text-base card__span">
            Decription:
          </span>
          {person.gender === "n/a" ? "machine" : person.gender}
        </p>
        <p>
          <span className="font-semibold text-base card__span">
            Birth year:
          </span>
          {person.birth_year}
        </p>
        <p>
          <span className="font-semibold text-base card__span">heigth:</span>
          {person.height}
        </p>
        {seeMore ? (
          <>
            <p>
              <span className="font-semibold text-base card__span">
                Hair color:
              </span>
              {person.hair_color}
            </p>{" "}
            <p>
              <span className="font-semibold text-base card__span">
                Rye color:
              </span>
              {person.eye_color}
            </p>
            <p>
              <span className="font-semibold text-base card__span">Mass:</span>
              {person.mass}
            </p>
          </>
        ) : (
          ""
        )}
      </div>

      <span
        className={seeMore ? "card__seelees" : "card__seemore"}
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? "ver menos" : "ver mas "}
        <i
          className={
            seeMore ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
          }
        />
      </span>
    </div>
  );
};
