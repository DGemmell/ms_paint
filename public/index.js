// initialize brushSize
let brushSize = 20;
let colour = 'black';
let cursorMode = 'brush';


window.addEventListener('DOMContentLoaded', function(){

  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');



  //  BRUSH SIZE SELECTOR
  const daddyBrush = document.getElementById('daddy-brush');
  daddyBrush.addEventListener('click', function(){
    cursorMode = 'brush';
    brushSize = 20;
    resetColour();
  })

  const mummyBrush = document.getElementById('mummy-brush');
  mummyBrush.addEventListener('click', function(){
    cursorMode = 'brush';
    brushSize = 10;
    resetColour();
  })

  const babyBrush = document.getElementById('baby-brush');
  babyBrush.addEventListener('click', function(){
    cursorMode = 'brush';
    brushSize = 5;
    resetColour();
  })

  const triangleCursor = document.getElementById('triangle');
  triangleCursor.addEventListener('click', function(){
    cursorMode = 'triangle';
  })


  // ANTIPENCIL

  const antiPencil = document.getElementById('anti-pencil');
  antiPencil.addEventListener('click', function(){
    cursorMode = 'brush';
    context.strokeStyle = 'white';
    context.fillStyle = 'white';
  })

  // RESET COLOUR

  const resetColour = function(){
    context.strokeStyle = colour;
    context.fillStyle = colour;
  }


  // DRAW CIRCLE
  const drawBrush = function(x, y, brushSize){
    context.beginPath();
    context.arc(x, y, brushSize, 0, Math.PI*2);
    context.fill();
  }

  // const getEndXY = function(){
  //   document.onmouseup = function(event) {
  //     endX = event.x;
  //     endY = event.y;
  //     return [endX, endY];
  //   }
  // }
  //
  // // DRAW TRIANGLE
  // const drawTriangle = function(event){
  //   const startX = event.x;
  //   const startY = event.y;
  //
  //   endXY = getEndXY();
  //
  //   debugger;
  //   // context.beginPath();
  //   // context.moveTo(x, y);
  //   // context.lineTo(x + 200, y);
  //   // context.lineTo(x + 200, y + 100);
  //   // context.closePath();
  //   // context.fill();
  // }

  const drawTriangle = function(x, y){
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 200, y);
    context.lineTo(x + 200, y + 100);
    context.closePath();
    context.fill();
  }

  // event is Click action


  // MOUSE CLICK
  let pressedMouse = false;

  canvas.addEventListener('mousedown', function(event){
    pressedMouse = true;
  })

  document.addEventListener('mouseup', function(event){
    pressedMouse = false;
  })


  canvas.onmousemove = function(event){
    if (pressedMouse){
      clickAction();
    }
  }

  const clickAction = function(){

    switch (cursorMode){
      case 'brush':
        drawBrush(event.x, event.y, brushSize);
        break;
      case 'triangle':
        drawTriangle(event);
        break;
      default:
        drawBrush(event.x, event.y, brushSize);
        break;
    }
  }


// COLOUR CHANGER

  const changeColour = function(){
    context.strokeStyle = this.value;
    context.fillStyle = this.value;
    colour = this.value;
  }

  const colourPicker = document.querySelector('#input-colour');
  colourPicker.addEventListener('change', changeColour);


})
