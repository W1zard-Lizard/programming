var junior=10
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background("#3CD72F"); 
  stroke("#59D939"); // an RGB color for the circle's border
  fill(255,junior,127,175); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,84,84); // center of canvas, 20px dia
  textSize(34);
  textFont("Helvetica");
  text("LEMON",100,100);
  ellipse(junior,10,84,84);
  ellipse(junior+10,20,84,84);
  ellipse(junior+74,84,200,200);
  if(junior>500){
  	junior=10;
	}else{
	junior=junior+2;
}


  ellipse(84,84,84,84,84);
 fill ("#C639D9");
 ellipse(200,200,20,20);
 fill ("#39D9D2");
 ellipse(50,50,102,102);
 fill("#F1E714");
 ellipse(10,10,84,84);
 fill ("#14F1E1");
 ellipse(junior,25,84,84)


}

1