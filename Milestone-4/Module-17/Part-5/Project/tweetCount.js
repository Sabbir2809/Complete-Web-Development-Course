let tweet = prompt("Compose your tweet");

//slice
let slicedTweet = tweet.slice(0, 140);

//alert
alert(slicedTweet + "\nYour original tweet size was:"+ tweet.length);

console.log(slicedTweet.length);

