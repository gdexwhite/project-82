 var canvas= 
 document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 var color= "red"
 var width= 2
var radius= ""
var mouseEvent="";
ctx = canvas.getContext("2d");
canvas.addEventListener("mouseDown", my_mousedown);
function my_mousedown(e) 
{
color= document.getElementById("color").value;
width= document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouseEvent= "mouseDown";
}
canvas.addEventListener("mouseMove", my_mousemove);
function my_mousemove(e)
{
    var current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
   var current_position_of_mouse_y= e.clientY - canvas.offsetTop;

  
  if (mouseEvent=="mouseDown")
  {
    
    console.log("Current position of mouse x and y:")
    console.log("Position x:" + current_position_of_mouse_x + "Position y:" + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,radius,0 ,2 * Math.PI);
    ctx.stroke();
  }
  }
canvas.addEventListener("mouseUp", my_mouseup);
function my_mouseup(e){
  mouseEvent= "mouseUp";
}
canvas.addEventListener("mouseLeave", my_mouseleave)
function my_mouseleave(e){
  mouseEvent= "mouseLeave";
}
