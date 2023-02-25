export * from "./Card";
import { Person } from "views/swapi";

export interface CardProps {
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
