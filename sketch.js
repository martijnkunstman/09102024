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
  createCanvas(400, 400);
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
  [1, 0, 2, 0, 0, 1, 2],
  [0, 1, 1, 1],
  [1, 0, 2, 0, 0, 1, 2],
  [1, 1, 1, 2, 2, 2],
  [1, 1, 1, 2, 2, 2],
];

console.log(myArray2[1][2]);

function draw() {
  // rect(0,0,50);
  // rect(50,0,50);
  // rect(100,0,50);
  // rect(0,50,50);
  // rect(50,50,50);
  // rect(100,50,50);
  // rect(0,100,50);
  // rect(50,100,50);
  // rect(100,100,50);
  //   textSize(20);
  //   for (y = 0; y < 7; y++) {
  //     for (x = 0; x < 7; x++) {
  //       rect(x * 50, y * 50, 50);
  //       text(x+"-"+y, 50 * x, 50* y);
  //     }
  //   }

  //   for (i = 0; i < myArray.length; i++) {
  //     fill(myArray[i]);
  //     rect(i * 50, 0, 50);
  //   }

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
      
      rect(x * 50, y * 50, 50);
      text(myArray2[y][x], x * 50, y * 50);
    }
  }


}
