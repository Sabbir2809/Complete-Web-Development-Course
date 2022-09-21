// Problem-5: isBestFriend
function isBestFriend(friends){
  // If Condition is True
  if((friends[0].name.toLowerCase() === friends[1].friend.toLowerCase()) && (friends[1].name.toLowerCase() === friends[0].friend.toLowerCase())){
    return true;
  }
  // If Condition is False
  else{
    return false;
  }
}

