let naam = "martijn";

if (naam == "martijn") {
  console.log("hoi martijn");
}

for (let i = 0; i < 10; i++) {
  console.log("hoi martijn" + i);
}

let arrayNamen = ["martijn", "jeroen", "jelle"];

function schrijfNaam(naam) {
  console.log(naam);
}

schrijfNaam("pietje");
//---------------------

function setup() {
  createCanvas(800, 400);
  background(220);
}

myArray = [
  "red",
  "green",
  "blue",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "white",
];

myArray2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(myArray2[1][2]);

let counter = 0;
let timer = 0;

function draw() {
  background(200);
  counter = counter + 1;
  timer++;
  if (timer > 5) {
    timer = 0;
  }
  textSize(30);
  text(counter, 10, 300);

  for (y = 0; y < myArray2.length; y++) {
    for (x = 0; x < myArray2[y].length; x++) {
      if (myArray2[y][x] == 0) {
        fill("red");
      }
      if (myArray2[y][x] == 1) {
        fill("green");
      }
      if (myArray2[y][x] == 2) {
        fill("black");
      }

      if (counter > x + y * 50) {
        rect(x * 50, y * 50, 50);
        text(myArray2[y][x], x * 50, y * 50);
      }

      if (counter > 400) {
        counter = 0;
      }
    }

    if (timer == 0) {
      let temp = myArray2[y][8];
      myArray2[y].unshift(temp);
      myArray2[y].pop();
    }
  }
}
