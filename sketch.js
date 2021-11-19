let angle;
let textu=[];//texture
let rot = []; //rotation
let radius = []; //size
let speed = []; //speed of rotation
let orbit = []; //obitational radius

let galaxy, sun, stars, ceres, earth, jupiter, makemade, mars, mercury, neptune, saturn, venus;

function setup() {
  createCanvas(700, 700, WEBGL);
 // angleMode();
  angle= -220;
  stars = createGraphics(700, 700);
 
    galaxy = loadImage("galxy.jpg");
    sun = loadImage("sun.jpg");
    mercury=loadImage("mercury.jpg");
    venus=loadImage("venus.jpg");
    earth=loadImage("earth.jpg");
    mars=loadImage("mars.jpg");
    jupiter= loadImage("jupiter.jpg");
    saturn=loadImage("saturn.jpg");
    neptune=loadImage("neptune.jpg");
    ceres=loadImage("ceres.jpg");
    makemade=loadImage("makemade.jpg");
    noStroke();
  
  
   for (let i = 0; i < 9; i++) {
    rot[i] = random(0, 310);
    orbit[i] = random(80, 350);
    radius[i] = random(4.5, 15);
    speed[i] = random(0.01,0.003);
  
  
 let c = random(1); // generate a number between 0.0 and 1.0
    if (c > 0 && c < 0.1) { 
      textu[i] = mercury;
    } else if (c > 0.1 && c < 0.2) {  
      textu[i] = venus;
    } else if (c >0.2 && c< 0.3) { 
      textu[i] = earth;
    } else if (c >0.3 && c<0.4) { 
      textu[i] = mars;
    } else if (c >0.4 && c<0.5) { 
      textu[i] = jupiter;
    } else if (c >0.5 && c<0.5) { 
      textu[i] = saturn;
    } else if (c >0.6 && c<0.7) { 
      textu[i] = neptune; 
    } else if (c >0.7 && c<0.8) { 
      textu[i] = ceres;
    } else  { 
      textu[i] = makemade;

  }     
 } 
}


function draw() {
  // background(0);

  //space background
  plane(700, 700);
  texture(galaxy);
  stars.noStroke();
  let starX = random(700);
  let starY = random(700);
  stars.ellipse(starX, starY, 1, 1);
  image(stars, -350, -350);

  //sun
  push();
  texture(sun);
  rotateZ(millis(500)/-20000);
  sphere(60);
  pop();

  pointLight(255, 255, 255, 0, 0, 0);
  ambientLight(50);

  
  for (let i = 0; i < orbit.length; i++) {
    push();
    let aniX = sin(rot[i]) * orbit[i];
    let aniY = cos(rot[i]) * orbit[i];
    translate(aniX, aniY, 0);
    texture(textu[i]);
    rotateZ(angle);
    //fill('white');
    sphere(radius[i]);
    pop();
    rot[i]+=speed[i];
  
}
}
