function isTouching(shape1,shape2){
    if(shape1.x-shape2.x<=
      shape2.width/2+shape1.width/2 &&
      shape2.x-shape1.x<=
      shape2.width/2+shape1.width/2&&
      shape1.y-shape2.y<=
      shape2.height/2+shape1.height/2&&
      shape2.y-shape1.y<=
      shape2.height/2+shape1.height/2){
       
        return true;
      }
      else{
        return false;
      }
  }