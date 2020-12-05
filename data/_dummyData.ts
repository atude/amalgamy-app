import { Game, User } from "../types";

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
