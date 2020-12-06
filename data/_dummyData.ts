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
    gameName: "Valorant",
    gameImage:
      "https://pbs.twimg.com/profile_images/1291867974790295552/AFRVxzDT_400x400.jpg",
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
    gameName: "Fortnite",
    gameImage:
      "https://www.mobygames.com/images/covers/l/561802-fortnite-battle-royale-nintendo-switch-front-cover.jpg",

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
    gameName: "Minecraft",
    gameImage: "https://cdn.moble.com/w/89/162101/file/image14.png",
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
    gameName: "Phasmophobia",
    gameImage:
      "https://styles.redditmedia.com/t5_3l0n9/styles/communityIcon_5j29gqeo5hp51.png?width=256&s=0c424dfc6adc629b283cc0c2bd2f20d84aa8fced",
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
