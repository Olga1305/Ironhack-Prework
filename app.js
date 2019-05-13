// Mars Rover Ironhack Prework by Olga Dokukova

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["0.0"],
}

// ======================

// ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = rover.direction.replace("N", "W"); 
    console.log("Turned to the West");
    return rover;
    break;
    case "W":
    rover.direction = rover.direction.replace("W", "S");
    console.log("Turned to the South");
    return rover;
    break;
    case "S":
    rover.direction = rover.direction.replace("S", "E");
    console.log("Turned to the East");
    return rover;
    break;
    case "E":
    rover.direction = rover.direction.replace("E", "N");
    console.log("Turned to the North");
    return rover;
    break;
  }
  
}



function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = rover.direction.replace("N", "E");
    console.log("Turned to the East");
    return rover;
    break;
    case "E":
    rover.direction = rover.direction.replace("E", "S");
    console.log("Turned to the South");
    return rover;
    break;
    case "S":
    rover.direction = rover.direction.replace("S", "W"); 
    console.log("Turned to the West");
    return rover;
    break;
    case "W":
    rover.direction = rover.direction.replace("W", "N");
    console.log("Turned to the North");
    return rover;
    break;
  }
}



function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
    rover.y = rover.y - 1;
    console.log("Moved forward to the North");
    return rover;
    break;
    case "W":
    rover.x = rover.x - 1;
    console.log("Moved forward to the West");
    return rover;
    break;
    case "S":
    rover.y = rover.y + 1;
    console.log("Moved forward to the South");
    return rover;
    break;
    case "E":
    rover.x = rover.x + 1;
    console.log("Moved forward to the East");
    return rover;
    break;
  }
  var numX = rover.x; // Here I have a problem. I can't extract the property value to a new var.
  var numY = rover.y;
  var strX = numX.toString();
  var strY = numY.toString();
  var position = strX + "." + strY;
  rover.travelLog.push(position);
}


var str = "rffrfflfrff";

function commandsList(str){
  console.log("commandsList was called");
  for (var i = 0; i < str.length; i++) {
    str.charAt(i);
  switch (str.charAt(i)) {
    case "l":
    turnLeft(rover);
    break;
    case "r":
    turnRight(rover);
    break;
    case "f":
    moveForward(rover);
    break;
  }

  }
console.log(rover.travelLog)
}

commandsList(str)


//

