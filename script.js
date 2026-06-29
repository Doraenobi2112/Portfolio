const text = [

"Python Developer",

"AI Enthusiast",

"Frontend Developer"

];

let count=0;
let index=0;
let current="";
let letter="";

(function type(){

if(count===text.length){

count=0;

}

current=text[count];

letter=current.slice(0,++index);

document.getElementById("typing").textContent=letter;

if(letter.length===current.length){

count++;

index=0;

setTimeout(type,1200);

}

else{

setTimeout(type,120);

}

})();

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

class Particle{

constructor(){

this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.size=Math.random()*3+1;
this.speedX=(Math.random()-.5)*0.5;
this.speedY=(Math.random()-.5)*0.5;

}

update(){

this.x+=this.speedX;
this.y+=this.speedY;

if(this.x<0||this.x>canvas.width)this.speedX*=-1;
if(this.y<0||this.y>canvas.height)this.speedY*=-1;

}

draw(){

ctx.fillStyle="#4ea1ff";
ctx.beginPath();
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.fill();

}

}

for(let i=0;i<100;i++){

particles.push(new Particle());

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p)=>{

p.update();
p.draw();

particles.forEach((q)=>{

const dx=p.x-q.x;
const dy=p.y-q.y;
const dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){

ctx.strokeStyle="rgba(78,161,255,.15)";
ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(q.x,q.y);
ctx.stroke();

}

});

});

requestAnimationFrame(animate);

}

animate();
const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("galleryImage");

let images = [];
let currentIndex = 0;

function openGallery(imageArray){

    images = imageArray;

    currentIndex = 0;

    modal.style.display = "flex";

    modalImg.src = images[currentIndex];

}

document.querySelector(".close").onclick = function(){

    modal.style.display = "none";

}

document.querySelector(".next").onclick = function(){

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    modalImg.src = images[currentIndex];

}

document.querySelector(".prev").onclick = function(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    modalImg.src = images[currentIndex];

}

window.onclick = function(e){

    if(e.target == modal){

        modal.style.display = "none";

    }

}

function openForm() {
    document.getElementById("contactForm").classList.add("show");
}
