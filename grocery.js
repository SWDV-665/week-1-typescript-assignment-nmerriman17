// grocery.ts
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, category) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
    }
    return Grocery;
}());
var groceries = [
    new Grocery('Milk', 3, 'Dairy'),
    new Grocery('Tomato', 4, 'Produce'),
    new Grocery('Bread', 6, 'Bakery'),
    new Grocery('Mushroom', 9, 'Produce'),
    new Grocery('Eggs', 11, 'Dairy'),
    new Grocery('Bacon', 24, 'Meat'),
];
var htmlOutput = "\n  <html>\n    <head>\n      <title>Grocery List</title>\n    </head>\n    <body>\n      <h1>Grocery List</h1>\n      <ul>\n        ".concat(groceries
    .map(function (grocery) {
    return "<li>".concat(grocery.quantity, " ").concat(grocery.name, " (").concat(grocery.category, ")</li>");
})
    .join(''), "\n      </ul>\n    </body>\n  </html>\n");
console.log(htmlOutput);
// terminal
// tsc grocery.ts && node grocery.js > groceries.html
