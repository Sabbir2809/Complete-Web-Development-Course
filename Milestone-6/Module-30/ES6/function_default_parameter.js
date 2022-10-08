function add(first = 0, second = 0) {
  // second = second || 0;
  // if(second === undefined){
  //   second = 0;
  // }
  const total = first + second;
  return total;
}

const result = add(10, 20);
console.log(result);
