// const hiver = ["Noël", "neige", "cadeau", "froid", "décoration"];
// let length =  hiver.length;

// document.getElementById("hiver").innerHTML = length;



// const animal = ["chien", "lion", "oiseau", "serpent"];
// animal.shift();

// var divAnimal = document.getElementById("animal");
// divAnimal.innerHTML = "<strong>Au zoo il y a: </strong> " + animal;

// var paragraphe1 = document.createElement("p");
// paragraphe1.innerHTML = "<strong> Le premier animal que j'ai vu était un: </strong>" + animal[1];
// divAnimal.appendChild(paragraphe1);

// var paragraphe2 = document.createElement("p");
// paragraphe2.innerHTML = "<strong> Le deuxième animal que j'ai vu était un: </strong>" + animal[2];
// divAnimal.appendChild(paragraphe2);

// var paragraphe3 = document.createElement("p");
// paragraphe3.innerHTML = "<strong> Le premier animal que j'ai vu était un: </strong>" + animal[0];
// divAnimal.appendChild(paragraphe3);



// class Chien {
//     constructor(race) {
//       this.chienName = race;
//     }
//   }
  
//   monChien = new Chien("Berger Allemand");
//   document.getElementById("race").innerHTML = "Mon chien est un " + monChien.chienName;



// Boolean.prototype.myColor = function() {
//     if (this.valueOf() == true) {
//         return "green";
//       } else {
//         return "red";
//       }
// };
    
// let a = true;
// document.getElementById("boolean").innerHTML = a.myColor();



// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();



// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();



// var c = document.getElementById("helloWorld");
// var ctx = c.getContext("2d");
// ctx.font = "bold 30px Arial";
// ctx.fillStyle = "blue";
// ctx.fillText("Hello World", 10, 50);



// var c = document.getElementById("helloWorld2");
// var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.strokeText("Winter",50,50);



// var c = document.getElementById("myGradient");
// var ctx = c.getContext("2d");
// // Create gradient
// var grd = ctx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"yellow");
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);



// var c = document.getElementById("redDot");
// var ctx = c.getContext("2d");
// // Create gradient
// var grd = ctx.createRadialGradient(90,50,5,90,60,100);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"yellow");
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);



// function myCanvas() {
//   var c = document.getElementById("photo");
//   var ctx = c.getContext("2d");
//   var img = document.getElementById("scream");
//   ctx.drawImage(img,0,0);
// }



var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour=hour%12;
  hour=(hour*Math.PI/6)+
  (minute*Math.PI/(2*60))+
  (second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07);
  //minute
  minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07);
  // second
  second=(second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

