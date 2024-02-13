const users = [
  {
    username: "Moshe Cohen",
    imageUrl:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    username: "Itay Levy",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
  },
  {
    username: "Neema leibovith",
    imageUrl:
      "https://images.unsplash.com/photo-1521038199265-bc482db0f923?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBnaXJsfGVufDB8fDB8fHww",
  },
  {
    username: "Tamar israeli",
    imageUrl:
      "https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    username: "Tomer Asulin",
    imageUrl: "https://www.cl.cam.ac.uk/~ga384/profile.jpg",
  },
  {
    username: "Guy Mizrahi",
    imageUrl:
      "https://www.gold.ac.uk/media/images-by-section/departments/music/staff/Guy-Baron.jpg",
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
    comments: [
      {
        id: 3,
        text: "amazing ",
        author: "Itay Levy",
        imageUrl:
          "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg",
      },
    ],
  },
  {
    id: 2,
    publisher: "Itay Levy",
    text: "went on a walk with my wife last saturday!",
    imageUrl:
      "https://media.istockphoto.com/id/1452588698/photo/beautiful-forest-scenery-with-pine-trees-and-green-moss.jpg?s=1024x1024&w=is&k=20&c=T3boFIPk_WB8SpjIxFIt0m3zeM03dX-RWRYZWwoWKfU=",
    publishDate: "2022-03-04",
    comments: [
      {
        id: 4,
        text: "looks great!!! ",
        author: "Moshe Cohen",
        imageUrl:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
];

const menuItems = [{ text: "", imageUrl: "" }];

const contacts = [{ name: "Yonatan Cohen" }];

export { posts, users, menuItems };
