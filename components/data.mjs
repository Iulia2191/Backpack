// Import the Backpack class so we can make new Backpack objects.
import Backpack from "./backpack.mjs";

// Create new Backpack object
const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "everyday.svg"
);


const frogPack = new Backpack(
  "pack02",
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "October 16, 2019 15:00:00 PST",
  "frog.svg"
);
const bluePack = new Backpack(
  "pack03",
  "Blue Backpack",
  10,
  'blue',
  4,
  12,
  12,
  false,
  'May 21, 2021 16:00:00 PST',
  'blue.svg'
)


const backpackObjectArray = [everydayPack, frogPack, bluePack];


export default backpackObjectArray;