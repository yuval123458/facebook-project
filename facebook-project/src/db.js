const users = [
  {
    username: "duumyUser",
    email: "123@gmail.com",
    password: "1234",
  },
];

const posts = [
  {
    id: 1,
    publisher: "Moshe Cohen",
    text: "Have a look at that beatiful picture i took.",
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/668593321/display_1500/stock-photo-large-beautiful-drops-of-transparent-rain-water-on-a-green-leaf-macro-drops-of-dew-in-the-morning-668593321.jpg",
    publishDate: "2022-01-01",
    comments: ["first comment "],
  },
  {
    id: 2,
    publisher: "Itay Levy",
    text: "went on a walk with my wife last saturday!",
    imageUrl:
      "https://media.istockphoto.com/id/1452588698/photo/beautiful-forest-scenery-with-pine-trees-and-green-moss.jpg?s=1024x1024&w=is&k=20&c=T3boFIPk_WB8SpjIxFIt0m3zeM03dX-RWRYZWwoWKfU=",
    publishDate: "2022-03-04",
    comments: ["first comment "],
  },
];

const contacts = [{ name: "Yonatan Cohen" }];

export { posts, users };
