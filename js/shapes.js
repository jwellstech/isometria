//nxmxo cube
//(gridCoords(n,m,o), gridCoords(x,y,z), material type)
function drawRect(dimension, position, materialID){
  for(i = 0; i < dimension.x; i++){
    for(j = 0; j < dimension.y; j++){
      for(k = 0; k < dimension.z; k++){
          updateArray(map3d, gridCoords(position.x + i, position.y + j, position.z + k), materialID);
      }
    }
  }

  drawIso();
}

//nxnxn cube
//(size, gridCoords(x,y,z), material type)
function drawNCube(n, position, materialID){
  drawRect(gridCoords(n,n,n), position, materialID);
}
