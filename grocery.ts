// grocery.ts

class Grocery {
  name: string;
  quantity: number;
  category: string;

  constructor(name: string, quantity: number, category: string) {
    this.name = name;
    this.quantity = quantity;
    this.category = category;
  }
}

const groceries: Grocery[] = [
  new Grocery('Milk', 3, 'Dairy'),
  new Grocery('Tomato', 4, 'Produce'),
  new Grocery('Bread', 6, 'Bakery'),
  new Grocery('Mushroom', 9, 'Produce'),
  new Grocery('Eggs', 11, 'Dairy'),
  new Grocery('Bacon', 24, 'Meat'),
];

const htmlOutput = `
  <html>
    <head>
      <title>Grocery List</title>
    </head>
    <body>
      <h1>Grocery List</h1>
      <ul>
        ${groceries
          .map(
            (grocery) =>
              `<li>${grocery.quantity} ${grocery.name} (${grocery.category})</li>`
          )
          .join('')}
      </ul>
    </body>
  </html>
`;

console.log(htmlOutput);

// terminal
// tsc grocery.ts && node grocery.js > groceries.html