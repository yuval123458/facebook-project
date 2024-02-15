import MosheCohen from "./images/MosheCohen.jpeg";
import ItayLevy from "./images/ItayLevy.jpg";
import NeemaLeibovith from "./images/NeemaLeibovith.avif";
import TamarIsraeli from "./images/TamarIsraeli.avif";
import GuyAsulin from "./images/GuyAsulin.jpeg";
import GuyBaron from "./images/GuyBaron.jpeg";
import Nature from "./images/Nature.jpeg";
import Walk from "./images/Walk.jpeg";
import Food from "./images/Food.jpeg";
import Birthday from "./images/Birthday.webp";
import Paris from "./images/Paris.webp";
import Joe from "./images/Joe.webp";
import BA from "./images/BA.jpeg";
import Shopping from "./images/Shopping.avif";
import Design from "./images/Design.webp";
import Lego from "./images/Lego.avif";

const users = [
  {
    username: "Moshe Cohen",
    imageUrl: MosheCohen,
  },
  {
    username: "Itay Levy",
    imageUrl: ItayLevy,
  },
  {
    username: "Neema leibovith",
    imageUrl: NeemaLeibovith,
  },
  {
    username: "Tamar israeli",
    imageUrl: TamarIsraeli,
  },
  {
    username: "Tomer Asulin",
    imageUrl: GuyAsulin,
  },
  {
    username: "Guy Mizrahi",
    imageUrl: GuyBaron,
  },
];

const posts = [
  {
    id: 1,
    publisher: "Moshe Cohen",
    text: "Have a look at that beatiful picture i took.",
    imageUrl: Nature,
    publishDate: "2022-01-01",
    comments: [
      {
        id: 3,
        text: "amazing ",
        author: "Itay Levy",
        imageUrl: ItayLevy,
      },
    ],
  },
  {
    id: 2,
    publisher: "Itay Levy",
    text: "went on a walk with my wife last saturday!",
    imageUrl: Walk,
    publishDate: "2022-03-04",
    comments: [
      {
        id: 4,
        text: "looks great!!! ",
        author: "Moshe Cohen",
        imageUrl: MosheCohen,
      },
    ],
  },
  {
    id: 5,
    publisher: "Neema Leibovitch",
    text: "look at what i ate yestreday!",
    imageUrl: Food,
    publishDate: "2022-03-04",
    comments: [
      {
        id: 6,
        text: "looks great!!! ",
        author: "Guy Mizrahi",
        imageUrl: GuyAsulin,
      },
    ],
  },
  {
    id: 7,
    publisher: "Tamar Israeli",
    text: "celebrated my birthday ",
    imageUrl: Birthday,
    publishDate: "2022-03-04",
    comments: [
      {
        id: 8,
        text: "Happy birthday!!! ",
        author: "Tamar Israeli",
        imageUrl: TamarIsraeli,
      },
    ],
  },
  {
    id: 9,
    publisher: "Tamar Israeli",
    text: "celebrated my birthday, and then traveled to paris ",
    imageUrl: Paris,
    publishDate: "2022-03-04",
    comments: [],
  },
  {
    id: 10,
    publisher: "Moshe Cohen",
    text: "i love joe biden",
    imageUrl: Joe,
    publishDate: "2022-01-01",
    comments: [],
  },
  {
    id: 10,
    publisher: "Neema leibovith",
    text: "finished BA",
    imageUrl: BA,
    publishDate: "2022-01-01",
    comments: [],
  },
  {
    id: 11,
    publisher: "Itay Levy",
    text: "did some shopping ",
    imageUrl: Shopping,
    publishDate: "2022-03-04",
    comments: [],
  },
  {
    id: 12,
    publisher: "Moshe Cohen",
    text: "look at my new design",
    imageUrl: Design,
    publishDate: "2022-03-04",
    comments: [],
  },
  {
    id: 13,
    publisher: "Tomer Asulin",
    text: "i love lego",
    imageUrl: Lego,
    publishDate: "2022-03-04",
    comments: [],
  },
];

const menuItems = [{ text: "", imageUrl: "" }];

const contacts = [{ name: "Yonatan Cohen" }];

export { posts, users, menuItems };
