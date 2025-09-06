// arrays for random choice

const locationsArr = [
  "on Jupiter",
  "inside a black hole",
  "in a parallel universe",
  "on a spaceship orbiting Earth",
  "in the underwater city of Atlantis",
  "at the edge of the galaxy",
  "in a secret moon base",
  "inside a virtual reality server",
  "at the center of a wormhole",
  "on Mars’ abandoned colony"
];

const beingsArr = [
  "a time-travelling librarian",
  "an AI overlord",
  "a dragon with Wi-Fi",
  "an army of clones",
  "a friendly alien diplomat",
  "a rogue scientist",
  "a cyborg detective",
  "an ancient space god",
  "a shapeshifting comedian",
  "a robot uprising"
];

const actionsArr = [
  "rewrote world history",
  "demanded unlimited chocolate",
  "won the Nobel Prize",
  "created a new universe",
  "turned gravity off",
  "declared interstellar independence",
  "opened the first galactic bakery",
  "hacked into human dreams",
  "trained pigeons for space travel",
  "solved the energy crisis by accident"
];

// f for rand choice

const randPieceOne = () => {
   return locationsArr[Math.floor(Math.random()*locationsArr.length)];
}

const randPieceTwo = () => {
   return beingsArr[Math.floor(Math.random()*beingsArr.length)];
}

const randPieceThree = () => {
   return actionsArr[Math.floor(Math.random()*actionsArr.length)];
}

// f for final output

const mixedMessage = () => {
    const pieceOne = randPieceOne();
    const pieceTwo = randPieceTwo();
    const pieceThree = randPieceThree();
    return `Breaking news: just earlier today ${pieceOne} ${pieceTwo} ${pieceThree}.`
}

console.log(mixedMessage());