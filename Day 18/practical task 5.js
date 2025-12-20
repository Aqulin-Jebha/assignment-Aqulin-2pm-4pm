const prices = [199.00, 49.50, 20.00, 67.00, 999.00];
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log("Total:", total);
