import { Database } from "sqlite3";
//connect to the db in orders.db
const db = new Database("./orders.db", (err) => {
  if (err) console.error(err);
});

//create the table orders
db.run(
  "CREATE TABLE IF NOT EXISTS orders (email TEXT, mobileNumber INTEGER, address TEXT, numberOfLoaves INTEGER);",
  (err) => {
    if (err) console.error(err);
  }
);

export default function updateDB(
  email: string,
  mobileNumber: number,
  address: string,
  numberOfLoaves: number
) {
  //insert new record into db
  db.run(
    "INSERT INTO orders (email, mobileNumber, address, numberOfLoaves) VALUES (?, ?, ?, ?);",
    email,
    mobileNumber,
    address,
    numberOfLoaves,
    (err: any) => {
      if (err) console.error(err);
    }
  );
  return "Order Updated";
}
