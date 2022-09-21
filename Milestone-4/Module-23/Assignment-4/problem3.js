// Problem-3: 

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  if ((typeof dieselQuantity === 'number') && (typeof petrolQuantity === 'number') && (typeof octaneQuantity === 'number')) {
    const dieselPrice = 114 * dieselQuantity;
    const petrolPrice = 130 * petrolQuantity;
    const octanePrice = 135 * octaneQuantity;

    const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
    
    return totalOilPrice;
  }
  // code that may throw an error
  else {
    console.log("This Input is Incorrect! Please provide a Valid String");
  }
}
