function setup() {
  createCanvas(800, 400);
  background(220);
}

myArray2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let counter = 0;
let timer = 0;

function draw() {
  background(200);
  counter = counter + 1;//snelheid van opbouwen van de sprite
  timer++;//snelheid van bewegen van de sprite
  if (timer > 5) {
    timer = 0;
  }S
  textSize(30);
  text(counter, 10, 300);

  for (y = 0; y < myArray2.length; y++) {
    for (x = 0; x < myArray2[y].length; x++) {
      fill(defineColorByNumber(myArray2[y][x]));

      if (counter > x + y * 50) {//dit zogt er voor dat de sprite langzaam opbouwt
        rect(x * 50, y * 50, 50);
        text(myArray2[y][x], x * 50, y * 50);
      }

      if (counter > 400) {
        counter = 0;
      }
    }

    if (timer == 0) {
      //deze code zorgt er voor dat de sprite beweegt
      let lastValueOffArray = myArray2[y][myArray2[y].length - 1];
      myArray2[y].unshift(lastValueOffArray);
      myArray2[y].pop();
    }
  }
}

function defineColorByNumber(number) {
  let color = "white";
  if (number == 0) {
    color = "red";
  }
  if (number == 1) {
    color = "green";
  }
  if (number == 2) {
    color = "black";
  }
  return color;
}
