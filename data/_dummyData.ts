import { Game, Message, User } from "../types";

export const DUMMY_GAMES: Game[] = [
  {
    id: "1",
    name: "yes",
    desc: "this is a game description",
    publisher: "game publisher",
    accessibilityFeatures: [],
    devices: [],
    genres: [],
  },
  {
    id: "2",
    name: "random",
    desc: "this is a game description",
    publisher: "game publisher",
    accessibilityFeatures: [],
    devices: [],
    genres: [],
  },
  {
    id: "3",
    name: "game",
    desc: "this is a game description",
    publisher: "game publisher",
    accessibilityFeatures: [],
    devices: [],
    genres: [],
  },
  {
    id: "4",
    name: "awesome a very long game name yes cool beans",
    desc: "this is a game description",
    publisher: "game publisher",
    accessibilityFeatures: [],
    devices: [],
    genres: [],
  },
  {
    id: "5",
    name: "cool",
    desc: "this is a game description",
    publisher: "game publisher",
    accessibilityFeatures: [],
    devices: [],
    genres: [],
  },
];

export const DUMMY_FRIENDS: User[] = [
  {
    email: "yes",
    firstName: "Bob",
    lastName: "Jeremy",
    avatar: "yes",
  },
  {
    email: "yes2",
    firstName: "Smith",
    lastName: "Jack",
    avatar: "yes",
  },
];

// TODO: proper typing, define an activity type
export const DUMMY_FRIEND_ACTIVITY = [
  {
    gameId: "jsnadf",
    gameName: "ijuasdf msf",
    gameImage: "sda msf",
    friends: [
      {
        id: "yes",
        firstName: "Bob",
        lastName: "Jeremy",
        avatar: "yes",
      },
      {
        id: "yes2",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
    ],
  },
  {
    gameId: "jsnasaddf",
    gameName: "Yes this is a game",
    friends: [
      {
        id: "yes",
        firstName: "Bob",
        lastName: "Jeremy",
        avatar: "yes",
      },
      {
        id: "yes2",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
      {
        id: "yes3",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
      {
        id: "yes4",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
    ],
  },
  {
    gameId: "jsnaasddf",
    gameName: "No friends game",
    friends: [
      {
        id: "yes4",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
      {
        id: "yes4",
        firstName: "Jezza",
        lastName: "Jack",
        avatar: "yes",
      },
      {
        id: "yes4",
        firstName: "Awesome",
        lastName: "Jack",
        avatar: "yes",
      },
    ],
  },
  {
    gameId: "jsnaassdddf",
    gameName: "No friends game",
    friends: [
      {
        id: "yes4",
        firstName: "Smith",
        lastName: "Jack",
        avatar: "yes",
      },
    ],
  },
];

export const DUMMY_MESSAGES: Message[] = [
  {
    id: "ca095324-f822-4223-88e5-4fd3a3ac62c2",
    timestamp: 597759,
    receiverEmail: "santiagobass@insurity.com",
    senderEmail: "f@f.com",
    message:
      "Veniam id anim ex sunt. Pariatur sit qui nulla minim exercitation consequat labore enim et reprehenderit. Amet laborum deserunt quis cupidatat excepteur deserunt minim.\r\n",
  },
  {
    id: "eab8bbac-e817-45ad-ac38-91c082c92e70",
    timestamp: 444215,
    receiverEmail: "santiagobass@insurity.com",
    senderEmail: "santiagobass@insurity.com",
    message:
      "Exercitation nulla est nisi voluptate Lorem laboris occaecat in non. Excepteur amet voluptate laborum sit ex duis reprehenderit ad in nulla do dolore fugiat. Nulla aliqua aliqua nulla non Lorem pariatur qui. Sunt nisi labore magna nostrud adipisicing adipisicing ut mollit dolore nisi adipisicing nostrud adipisicing.\r\n",
  },
  {
    id: "d3a6a5fb-df12-4531-95be-dbc6c4802649",
    timestamp: 547167,
    receiverEmail: "santiagobass@insurity.com",
    senderEmail: "santiagobass@insurity.com",
    message:
      "Eiusmod velit sunt dolore fugiat in qui. In est ad tempor irure amet duis. In quis labore et eu mollit sunt ipsum cillum elit. Ad irure cillum enim ea aliquip quis cillum aliqua enim est exercitation. Tempor eiusmod fugiat excepteur adipisicing tempor excepteur do Lorem. In amet tempor aute est commodo ad deserunt aliqua amet ut ea.\r\n",
  },
  {
    id: "549f0ba6-387d-4ccb-bc6c-abcdcb574ae0",
    timestamp: 353143,
    receiverEmail: "santiagobass@insurity.com",
    senderEmail: "f@f.com",
    message:
      "Duis nisi sint nisi nostrud labore nisi. Est velit deserunt quis ipsum deserunt ullamco eiusmod ullamco et ea. Velit voluptate laboris proident cupidatat minim ad commodo adipisicing laboris quis.\r\n",
  },
  {
    id: "6ea91a56-3825-4b84-93f9-4279e3879b09",
    timestamp: 388895,
    receiverEmail: "santiagobass@insurity.com",
    senderEmail: "f@f.com",
    message:
      "Est proident ut non minim ut exercitation magna Lorem sint pariatur Lorem duis aliqua. Dolor excepteur reprehenderit fugiat duis labore Lorem ut aute. Anim irure dolor irure ad minim incididunt. Ut irure labore ex incididunt in ad et consequat voluptate velit. Esse qui tempor pariatur incididunt labore.\r\n",
  },
  {
    id: "b3bf97df-a794-4ae7-8df3-9e7710d26fe2",
    timestamp: 797897,
    receiverEmail: "santiagobass@insurity.com",
    senderEmail: "santiagobass@insurity.com",
    message:
      "Irure amet eu consectetur pariatur deserunt exercitation non pariatur incididunt commodo ex aute tempor elit. Tempor pariatur consequat dolore velit ea dolore amet proident dolor eu incididunt ut eu tempor. Incididunt deserunt elit excepteur cupidatat nulla ullamco voluptate sunt quis. Cupidatat nisi voluptate magna minim. Eiusmod duis excepteur nisi adipisicing.\r\n",
  },
];
