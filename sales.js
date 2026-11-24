let profitAnnually = ( 30000 - 5000);
let fixedSales = (6/100 * 5000) + (8/100 * 5000);
profitAnnually -= fixedSales;
let sales = (10/100 * 10000);
let salesCounter = 2;
while (profitAnnually > 0) {
	profitAnnually -= sales
	salesCounter++;
}
console.log(salesCounter + " sales");
