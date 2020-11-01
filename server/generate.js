var faker = require("faker");

var database = { aprs: [], apgs: [] };

for (var i = 1; i <= 30; i++) {
  database.aprs.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
  });
}

for (var i = 1; i <= 30; i++) {
  database.apgs.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
  });
}

console.log(JSON.stringify(database));
