const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "retail_store",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL Database.");
  runQueries();
});

function runQueries() {
  const insertSupplier =
    "INSERT INTO suppliers (supplierName, contactNumber) VALUES ('FreshFoods', '01001234567')";

  db.query(insertSupplier, (err, result) => {
    if (err) throw err;
    const supplierId = result.insertId;
    console.log(`1. Supplier added with ID: ${supplierId}`);

    const products = [
      ["Milk", 15.0, 50, supplierId],
      ["Bread", 10.0, 30, supplierId],
      ["Eggs", 20.0, 40, supplierId],
    ];

    const insertProducts =
      "INSERT INTO products (productName, price, stockQuantity, supplierID) VALUES ?";

    db.query(insertProducts, [products], (err, res) => {
      if (err) throw err;
      console.log("2. Three products inserted successfully.");

      db.query(
        "UPDATE products SET price = 25.00 WHERE productName = 'Bread'",
        (err) => {
          if (err) throw err;
          console.log("3. Bread price updated.");

          db.query("DELETE FROM products WHERE productName = 'Eggs'", (err) => {
            if (err) throw err;
            console.log("4. Eggs deleted.");

            const unsoldQuery =
              "SELECT * FROM products WHERE productID NOT IN (SELECT productID FROM sales)";
            db.query(unsoldQuery, (err, results) => {
              if (err) throw err;
              console.log("5. Unsold Products:", results);

              db.end();
            });
          });
        }
      );
    });
  });
}
