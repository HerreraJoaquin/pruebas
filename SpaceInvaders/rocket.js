function rockets(){
  
  fill(26,175,255);
  rect(r1x,r1y,rWidth,rHeight);

if(fire == true && r1Position == 0){
  r1Position = 1;
}

if(r1Position == 1){
  r1x = r1x;
  r1y = r1y-rSpeed;
  
  if(r1y <= 50){
    r1Position = 2;
  }
  
}
else{
  
  r1y = p1y;
  r1x = p1x;
}

if(r1Position == 2){
  r1y = p1y;
  r1x = p1x;
  r1Position = 0;
}

}
