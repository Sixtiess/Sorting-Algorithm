const arraySize = 600;
let numbers = [];
let sortFlag = false;
let grnidx = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < arraySize; i++) {
    numbers[i] = round(random(1, height));
    //console.log(numbers[i]);
  }

}

function draw() {
  background(255);
  noStroke();

  if (sortFlag == false) {
    sortFlag = meSort();
  }

  if (sortFlag == true) {
    //console.log('sorted')
    grnDraw(grnidx++);
  }
  else {
    grnDraw(arraySize);
  }
}

function meSort() {
  didISort = true;
  for (let i = 0; i < arraySize - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      let temp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = temp;
      didISort = false;
    }
  }
  return didISort;
}

function grnDraw(idx) {
  for (let i = 0; i < arraySize; i++) {
    if (idx == arraySize) {
      fill(0);
    }
    else if (i <= idx) {
      fill(0, 255, 0);
    } else {
      fill(0);
    }
    rect((width / arraySize) * i, height - numbers[i], width / arraySize, numbers[i]);
  }

}