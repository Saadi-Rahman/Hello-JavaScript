const color = "yellow";
if(color === "green") {
    console.log("This is green color.");
}
else if(color === "blue") {
    console.log("This is blue color.");
}
else if(color === "red") {
    console.log("This is red color.");
}
else if(color === "white") {
    console.log("This is white color.");
}
else if(color === "yellow") {
    console.log("This is yellow color.");
}
else {
    console.log("This is black color.");
}

// switch 
switch(color) {
    case "green":
        console.log("This is green color.");
        break;
    case "blue":
        console.log("This is blue color.");
        break;
    case "red":
        console.log("This is red color.");
        break;
    case "white":
        console.log("This is white color.");
        break;
    case "yellow":
        console.log("This is yellow color.");
        break;
    default:
        console.log("This is black color.");
        break;
}