// Problem 5: isBestFriend
let me={ name:'sumon',friend:'Fahad'}
let his={ name:'rifat', friend:'sumon'}
let her= "hello";

function isBestFriend(first,second){
if(typeof first !== 'object' || typeof second !== 'object' ){
    return 'invalid input'
}
 if(first.name===second.friend && second.name===first.friend ){
  return true;
}
else{
  return false;
}

}
console.log(isBestFriend(me,her));
