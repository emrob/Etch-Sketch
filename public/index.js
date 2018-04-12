window.addEventListener('DOMContentLoaded', function(){

  let x = 300;
  let y = 250;

  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');

  window.addEventListener('keydown', function(event){
    drawLine(event.keyCode);
  })

  const drawCircle = function(x, y){
    context.beginPath();
    context.arc(x, y, 40, 0, Math.PI*2);
    context.stroke();
    context.fill();
  }

  const drawLine = function(code){
    context.beginPath();
    context.moveTo(x, y);
    if(code === 38){
      y -= 10;
    } else if(code === 40)
    {
      y += 10;
    } else if(code === 37)
    {
      x -= 10;
    } else if(code === 39)
    {
      x += 10;
    };
    if(x < 0){ x = 0 }
    else if (x > 600) { x = 600};
    if(y < 0){ y = 0 }
    else if (y > 500) { y = 500};

    context.lineTo(x, y);
    context.stroke();
  }
  // 
  // drawCircle(100, 500);
  // drawCircle(500, 500);

})
