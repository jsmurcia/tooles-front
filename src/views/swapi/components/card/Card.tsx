import { useState } from "react";
import { CardProps, IMAGES } from ".";
import "./Card.scss";

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
