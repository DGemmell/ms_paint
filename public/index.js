// initialize brushSize
let brushSize = 20;
let colour = 'black';


window.addEventListener('DOMContentLoaded', function(){

  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');



  //  BRUSH SIZE SELECTOR
  const daddyBrush = document.getElementById('daddy-brush');
  daddyBrush.addEventListener('click', function(){
    brushSize = 20;
    resetColour();
  })

  const mummyBrush = document.getElementById('mummy-brush');
  mummyBrush.addEventListener('click', function(){
    brushSize = 10;
    resetColour();
  })

  const babyBrush = document.getElementById('baby-brush');
  babyBrush.addEventListener('click', function(){
    brushSize = 5;
    resetColour();
  })


  // MAKE TRIANGLE
  //  change what cursor does if Triangle


  // ANTIPENCIL

  const antiPencil = document.getElementById('anti-pencil');
  antiPencil.addEventListener('click', function(){
    context.strokeStyle = 'white';
    context.fillStyle = 'white';
  })

  // RESET COLOUR

  const resetColour = function(){
    context.strokeStyle = colour;
    context.fillStyle = colour;
  }


  // DRAW CIRCLE
  const drawCircle = function(x, y, brushSize){
    context.beginPath();
    context.arc(x, y, brushSize, 0, Math.PI*2);
    context.fill();
  }



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
      drawCircle(event.x, event.y, brushSize);
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
